import { useEffect, useState, useCallback } from "react";

export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return offset;
};

export const useMouseParallax = (intensity: number = 0.02) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);

  // Request device motion permission (required for iOS 13+)
  const requestPermission = useCallback(async () => {
    if (typeof (DeviceMotionEvent as any).requestPermission === 'function') {
      try {
        const permission = await (DeviceMotionEvent as any).requestPermission();
        setHasPermission(permission === 'granted');
        return permission === 'granted';
      } catch (e) {
        console.log('Device motion permission denied');
        return false;
      }
    }
    // Non-iOS devices don't need permission
    setHasPermission(true);
    return true;
  }, []);

  useEffect(() => {
    // Check if device is mobile/tablet
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };
    checkMobile();

    // Desktop: Mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      const x = (e.clientX - window.innerWidth / 2) * intensity;
      const y = (e.clientY - window.innerHeight / 2) * intensity;
      setPosition({ x, y });
    };

    // Mobile: Device orientation (gyroscope)
    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (!isMobile) return;
      
      const beta = e.beta || 0;  // -180 to 180 (front-back tilt)
      const gamma = e.gamma || 0; // -90 to 90 (left-right tilt)
      
      // Normalize to similar range as mouse movement
      // Center around 0 (device held at ~45 degrees is neutral)
      const normalizedBeta = (beta - 45) * intensity * 2;
      const normalizedGamma = gamma * intensity * 2;
      
      setPosition({ 
        x: normalizedGamma * 10, 
        y: normalizedBeta * 10 
      });
    };

    // Mobile: Device motion (accelerometer) as fallback
    const handleDeviceMotion = (e: DeviceMotionEvent) => {
      if (!isMobile) return;
      
      const acceleration = e.accelerationIncludingGravity;
      if (!acceleration) return;
      
      const x = (acceleration.x || 0) * intensity * 5;
      const y = (acceleration.y || 0) * intensity * 5;
      
      setPosition({ x, y });
    };

    // Add event listeners
    if (isMobile) {
      // Try to request permission and add mobile listeners
      requestPermission().then((granted) => {
        if (granted || hasPermission) {
          window.addEventListener("deviceorientation", handleDeviceOrientation, { passive: true });
          window.addEventListener("devicemotion", handleDeviceMotion, { passive: true });
        }
      });
    } else {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
      window.removeEventListener("devicemotion", handleDeviceMotion);
    };
  }, [intensity, isMobile, hasPermission, requestPermission]);

  return { position, isMobile, requestPermission };
};

// Hook specifically for tilt-based card effects
export const useTiltEffect = (intensity: number = 15) => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      ('ontouchstart' in window);
    setIsMobile(mobile);

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (!mobile) return;
      
      const beta = e.beta || 0;
      const gamma = e.gamma || 0;
      
      // Clamp values for subtle effect
      const rotateX = Math.max(-intensity, Math.min(intensity, (beta - 45) * 0.3));
      const rotateY = Math.max(-intensity, Math.min(intensity, gamma * 0.3));
      
      setTilt({ rotateX: -rotateX, rotateY });
    };

    if (mobile) {
      window.addEventListener("deviceorientation", handleDeviceOrientation, { passive: true });
    }

    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, [intensity]);

  return { tilt, isMobile };
};
