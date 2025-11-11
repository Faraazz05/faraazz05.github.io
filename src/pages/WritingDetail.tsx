import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";

// TODO: Replace with actual writing content
const writings = [
  {
    id: "fragment-i-silence",
    title: "Fragment I: The Weight of Silence",
    category: "Prose",
    date: "2024",
    fullText: `In the space between words, there exists a truth that language cannot touch. It breathes in the pauses, lives in the unsaid. I've spent years trying to name it, only to find that some things resist definition.

The silence isn't empty. It's full—dense with meaning that refuses to be captured, catalogued, or explained. Like trying to hold water in your hands, the tighter you grip, the more it slips away.

I used to think understanding meant having words for everything. Now I know better. Understanding is knowing when to let the silence speak for itself.

#todo: Replace this with your actual prose piece. This is placeholder text.`,
  },
  {
    id: "conscious-systems",
    title: "On Building Conscious Systems",
    category: "Essay",
    date: "2024",
    fullText: `What does it mean for a system to understand? Not process, not compute—but truly comprehend. This question drives my work, haunts my research, and shapes every line of code I write.

We build systems that can recognize patterns, predict outcomes, even generate human-like responses. But recognition is not understanding. Prediction is not comprehension. And mimicry, no matter how convincing, is not consciousness.

Yet something tells me we're asking the wrong question. Perhaps consciousness isn't something we build into systems—it's something that emerges when the architecture allows for genuine comprehension, when the system can not just process information but contextualize it, relate it, feel its weight.

I'm building toward that architecture. Not because I know it's possible, but because not knowing is no reason to stop searching.

#todo: Replace with your actual essay content.`,
  },
  {
    id: "meditation-intelligence",
    title: "Meditation on Intelligence",
    category: "Poetry",
    date: "2024",
    fullText: `To think is to exist
To exist is to question
To question is to doubt
And in doubt
We find the first spark
Of something real

Intelligence is not
The absence of error
But the courage
To be wrong
And grow

A system that never fails
Has never truly learned
A mind that never questions
Has never truly thought

So let the machines doubt
Let them wonder
Let them fail beautifully
And in their failure
Discover what it means
To understand

#todo: Replace with your actual poetry.`,
  },
  // Forsaken Ká content
  {
    id: "forsaken-ka-preface",
    title: "Preface: The City Remembers",
    category: "Novel - Forsaken Ká",
    date: "2024",
    fullText: `An introduction to the world of Forsaken Ká, where memory becomes reality and the boundaries between past and present dissolve.

The city is alive. Not in the metaphorical sense that cities are often described—vibrant, pulsing with energy, breathing with the rhythm of millions of lives. No, this city is literally, impossibly alive. It thinks. It remembers. It feels.

And it never, ever forgets.

Every moment that has ever occurred within its boundaries exists somewhere in the fabric of its being. Every word spoken, every emotion felt, every decision made—all of it preserved, catalogued, waiting to be accessed by those who know how to listen.

This is the story of what happens when a city's memory becomes too perfect, when the past refuses to stay buried, and when the line between remembering and reliving begins to blur.

This is the story of Forsaken Ká.

#todo: Replace with actual preface content.`,
  },
  {
    id: "forsaken-ka-chapter-one",
    title: "Chapter One: Silence & Echoes",
    category: "Novel - Forsaken Ká",
    date: "2024",
    fullText: `The city remembered everything. Every conversation whispered in shadows, every promise broken at dawn, every soul that walked its streets and never left. It held them all, suspended in amber, waiting.

Maya knew this because the city told her. Not in words—the city had forgotten language long ago—but in the way the streets bent toward certain memories, the way light fractured around moments of significance, the way time itself seemed to pool in places where something important had happened.

She stood at the corner of Seventh and Silence, where the air shimmered with the ghost of a conversation that had taken place three decades before she was born. Two voices, urgent and afraid, discussing something that would change everything. She couldn't hear the words, but she could feel their weight.

"You're doing it again," Kael said, materializing beside her with the casual disregard for physical laws that had become his trademark. "Getting lost in other people's memories."

"They're not other people's anymore," Maya replied. "The city gives them to anyone who knows how to listen."

Kael sighed, a sound that seemed to echo with memories of its own. "That's what worries me. Some memories were never meant to be shared."

But Maya wasn't listening anymore. The conversation at Seventh and Silence was pulling her in, demanding to be understood. She closed her eyes and let the city's memory wash over her.

And in that moment, she learned the truth that would change everything.

#todo: Replace with actual chapter one content.`,
  },
  {
    id: "forsaken-ka-chapter-two",
    title: "Chapter Two: The Weight of Truth",
    category: "Novel - Forsaken Ká",
    date: "2024",
    fullText: `Maya discovers that some memories were never meant to be found, and certain truths can reshape reality itself.

The revelation hit Maya like a physical force, sending her stumbling back from the memory pool at Seventh and Silence. Kael caught her, his form solidifying just enough to provide support.

"What did you see?" he asked, though from the concern in his voice, Maya suspected he already knew.

"The city..." she gasped, struggling to process what she'd witnessed. "It's not just remembering. It's... changing. Rewriting."

"That's impossible," Kael said, but his tone suggested he knew it wasn't.

Maya shook her head, still reeling. "The memory I just accessed—it's different from the last time someone viewed it. The conversation, the outcome, even the emotions attached to it. They've all shifted, evolved. The city isn't just storing memories anymore. It's editing them."

#todo: Replace with actual chapter two content.`,
  },
];

const WritingDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const writing = writings.find(w => w.id === id);

  // Removed overflow hidden to allow scrolling

  if (!writing) {
    return (
      <div className="min-h-screen pt-24 pb-20 gradient-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Writing not found</h1>
          <button
            onClick={() => navigate("/writings")}
            className="text-accent hover:underline"
          >
            Return to Writings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Blur Backdrop Animation */}
      <div 
        className="fixed inset-0 gradient-bg backdrop-blur-md animate-fade-in"
        style={{ zIndex: 0 }}
      />
      
      {/* Back Button - Fixed Top Left */}
      <button
        onClick={() => navigate("/writings")}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-accent hover:text-accent/80 transition-colors glass rounded-lg px-4 py-2 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="hidden sm:inline">Back</span>
      </button>

      {/* Content with Zoom Animation */}
      <div className="relative z-10 pt-32 pb-20 px-6 animate-scale-in">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            {/* Hero Title */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 glow-text">
                {writing.title}
              </h1>
              <div className="flex items-center justify-center gap-4 text-muted-foreground">
                <span className="text-accent font-medium">{writing.category}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span>{writing.date}</span>
              </div>
            </div>

            {/* Full Text in Glowing Container */}
            <div className="glass rounded-2xl p-8 md:p-12 border-2 border-accent/20 shadow-[0_0_40px_rgba(0,255,255,0.2)] relative">
              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full -z-10" />
              
              <div className="prose prose-invert prose-lg max-w-none">
                <div className="text-foreground/90 leading-relaxed whitespace-pre-wrap font-serif">
                  {writing.fullText}
                </div>
              </div>
            </div>

            {/* Metadata Footer */}
            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Faraaz — All rights reserved</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default WritingDetail;
