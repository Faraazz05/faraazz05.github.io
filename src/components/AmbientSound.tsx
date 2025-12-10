import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const AmbientSound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Using a free ambient space sound from a reliable source
  // TODO: Replace with your own ambient audio file if desired
  const ambientSoundUrl = "/assets/sounds/Antent.mp3";

  useEffect(() => {
    // Create audio element
    const audio = new Audio();
    audio.loop = true;
    audio.volume = 0.50; // Low volume for ambient effect
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        setIsLoading(true);
        // Set source only when first playing
        if (!audioRef.current.src) {
          audioRef.current.src = ambientSoundUrl;
        }
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Error playing audio:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleSound}
      disabled={isLoading}
      className="glass-hover text-muted-foreground hover:text-accent transition-colors"
      aria-label={isPlaying ? "Mute ambient sound" : "Play ambient sound"}
      title={isPlaying ? "Mute ambient sound" : "Play ambient sound"}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      ) : isPlaying ? (
        <Volume2 className="w-5 h-5" />
      ) : (
        <VolumeX className="w-5 h-5" />
      )}
    </Button>
  );
};

export default AmbientSound;
