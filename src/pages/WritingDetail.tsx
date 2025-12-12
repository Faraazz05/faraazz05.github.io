import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";


const writings = [
  {
    id: "prayer",
    title: "The Prayer Before Fall",
    category: "Poetry",
    date: "2025",
    fullText: `My lord, I have condemned myself on a pitiful journey that I ought to take. Perhaps I am scared of losing everything I own and owe someone once.

My lord, I shall not be afraid of the quest I have chosen for myself in the beautiful, living, full garden of destiny.

My lord, I, the mere mortal, have chosen my beneath desire, which is completely sought to be filled with the incomplete, non-reasonable, filthy dreams in the eyes of others.

My lord, I, your servant, don’t know where I am going to walk afar on this path—where the roads will take my mortal feet.

My lord, I am coming closer to death—of mine—and becoming a destructive weapon of my own happiness.

My lord, I don’t know if I am even doing it right, or if I should reconsider these decisions that I have taken while being consumed by immortal desires.

My lord, I, the one who chose these roads—the time will pass here like a year in a minute compared to the mortal's world. While the time passes, I am going to go afar from your presence.

My lord, I might deny your existence at some point, although the path I have chosen seems more reliable and important to me than your existence.

My lord, I ask you with a humble request from the heart which is slowly disappearing—if there is a possibility, you—the one who reigns on the thrones of hell and heaven, who has seen the unseen—may forgive me for the things I am about to condemn myself with.

My lord, I am not able to stop now, even if you send the mightiest angel of yours to punish me or stop me. I am precisely a million times sure that I won't be able to survive the attack of your angel. But that won't change the course of my journey.

My lord, I have come to hundreds of conclusions why I should not walk on the path where I will be denying your guidance for the lust I have—for the desire I dream of. Perhaps I have only one conclusion why I should walk on it without giving it another thought.

My lord, I now become the Death, Despair, Agony—a being which has no knowledge of your existence or anyone else. I now walk on the things I want.`,
  },
  {
    id: "WHO_I",
    title: "WHO AM I",
    category: "Prose",
    date: "2025",
    fullText: `Who am I? pathetic question, isn't it? I mean— who even asks that? Someone who has lost his memory probably… But that's not the case with me! 

So, then who am I? A vessel with bone, skin and blood running in the veins. There are a lot of people like me, so many vessels. We talk, walk, laugh, cry and exist just to pretend to be more than we are—Pretending to be something else. But we have a name! And my name? My name is Mohd Faraz!

But the name doesn't give the answer to the question I asked. Who am I? Why do I feel like this? Why does this feel so empty, like a hollow? I asked this daily to whom? To myself! It has become a ritual now, like breathing. Pretty weird, right? And pointless. 

It's like asking the moon why it shines so bright in the night, even though we both know it is nothing but dull and all dark, a dead rock in space. Why does the moon glow? Well, it has a lover—sun. The sun keeps the moon glowing even during the darkest times. Love gives it light. But what happens when there is no sun?

Well, well my bad I keep drifting from the topic I was talking about, so yeah! Who am I? Do you know? Or does anyone know who I am? As it seems, I am something different in everyone's eyes— a son, a friend, a lover, a sibling, a teammate, a listener, a support system, a fixer, a strong one, a bad one, a villain. But never- never a human who can make mistakes. I am expected to endure to carry to smile through it all.

Perhaps, I always failed to be one. I always failed to be the one for them. Not because I am not trying, but because I am drowning and everyone thinks I am swimming differently and, because of that, I always end up hurting people I want to protect. I destroyed the smiles on the faces I wanted to see laugh. I disappointed those I desperately wanted to make proud.

You know what I call this life of mine? A prison—not with bars or bricks but with expectations, regrets and silent screams that no one hears. I live just to suffer some days even breathing feels like a betrayal, like I am cheating death when I don't even want to. A lot of torment to bear with. Isn't it? 

But I am not alone in this boat. There are others who are sinking too. Others wear masks so well daily that they don't even know anymore who is underneath. 

So... who am I? Am I you? Or are you me? Why do we all feel the same in different words? 

Is it because we somewhat happened to make mistakes we can't undo or unsay things we weren't supposed to? Because we wanted to be enough for them? Or is it because we pretend we're okay so no one has to worry?

We all suffered. Whose torment is heavier—mine or yours? Pain isn't a competition; it just exists. Well still, after all this, I don't have an answer to the question.

Who am I?`,
  },
  {
    id: "Cursed_Birth",
    title: "Birth is a curse",
    category: "Prose",
    date: "2025",
    fullText: `To be born is a wound, a curse upon the life of one. Bound in a torment of blood and spirit

What's even the meaning of this fragile life? Now you want to kill yourself? A meaningless act. You think it's an escape from everything... But guess what, you are already too late to perform it. To erase your mere filthy existence. The world is already a graveyard, massacring everyone. Every corner here is shrouded in darkness, even under the gloomy light of the sun. 

A miserable existence, filled with torment, is a burden. Isn't it... and you still try to find the meaning of it? Huh, trying so hard just to hide your sinful acts that you committed along the way of your journey. Whether you ask for a merciful end or perhaps salvation, remember that death is forbidden in the world of the gods you cling to. But think—arn’t these gods just figments of desperation, stories whispered to numb the agony of existence? The gods you worship, the ones you claim to be your saviors, are silent, absent, and perhaps never there at all. If they existed, wouldn’t they have lifted the weight of your torment? Wouldn’t they have spared this world its endless suffering? No, these gods were born from your fears, carved from the need to make sense of chaos. But chaos has no master, no divine hand. It’s just you—alone in this abyss, praying to shadows that never answer.

But here is the hilarious part: life isn't just filled with torment; it's a full ledger. A ledger of regrets, eternal pain, and doubts. Your birth is indeed a curse upon you; perhaps as a homosapien, you are a broken creature with dreams and wishes but crushed by the weight of the torture that this life has given you. In the end, you seek release; a death-seeking death is forbidden here, as the pain is endless, which replicates the death. 

You were cursed; you were damned the moment you were born into this miserable world.

Condemned the existence in the land where everything is burning because of lies and the monsters disguise as humans. There is no salvation, only pain, here. They say life is such a marvelous gift; perhaps it's not a gift but a prison, an endless prison.

Indeed, being born is a curse, but what choice do you have? ... Nothing there is only one choice: living within this prison of yours built by this world. Every decision here will feel like wounding another scar on your soul with regrets or sorrow; no matter what the ledger will account, it will be painful. You look back and see the faces you have hurt because you didn't want to, but because of the wrong decisions you've made.

These decisions will whisper in your ears as a regret, stabbing you again and again and again until you are empty from inside like a hollow. And the worst part is you can't go back but to regret with every breath you take, every minute that passes. Time moves forward, dragging you through the muck of opportunities you missed and the mistakes you are yet to make. Still you try to run to escape from it, to bury all the weight in the beneath ground of distractions and hollow smiles but it always finds you— and you can't even outrun it because regret is the companion of curse which is on your very existence in this cruel world. It daily reminds you that no matter what you do you can't free yourself from this prison of existence.

And in the end, here you stand—a forsaken soul, bound eternally to torment within this prison of existence. Being born wasn’t a gift but an eternal joke, a curse disguised as life. There is no salvation here, no divine mercy, only the ceaseless suffering that chains you to this cruel reality. You were never meant to find peace, only to endure the torment until the bitter end.

In this endless cycle of pain and regret, you remain a prisoner—a hollow soul wandering through the graves of ashes and shattered hopes. From the very moment of your birth, you were doomed. Being born is such a drag, isn’t it?`,
  },
  {
    id: "How_does",
    title: "How does it feel",
    category: "monologue",
    date: "2025",
    fullText: `Am I dead inside?
Perhaps not. I most likely feel alive—I walk, move, eat, breathe, think, feel. Feel? What do I feel? How does it feel? To be unwanted? How does it feel to be loved, yet still suffer? How does it feel when there’s a weight upon you that feels like a burden? How does it feel when there's pain inside your heart? How does it feel when you can't speak, while your hands shiver from the misery you’re going through? How does it feel to look alive but feel dead inside? How does it feel when the motivation you once had no longer exists? How does it feel to be stuck between two paths, unsure of which one to take? How does it feel to hurt the people you love? How does it feel to lose someone you cared about? How does it feel to witness the death of someone you love? How does it feel to be alive? To be free? How does it feel when you're no longer the person you used to be? When you're no longer able to do the things you once did? When you’re no longer chasing the dreams you once saw? How does it feel to cry? How does it feel to smile? To laugh with your family? How does it feel to be a worthy son, brother, lover? How does it feel to work? To achieve goals? To be the one? To be lucky?

How does it feel? How does it feel??? How? How?

Guess I’ll never know.`,
  },
  {
    id: "Love_JOKE",
    title: "Love or a Divine Joke",
    category: "Poetry",
    date: "2025",
    fullText: `Oh, Lord Why? Why did You
    make a divine joke out of me?
    Wasn't I enough? Where did I go wrong?
    Perhaphs
    You should have given me an incurable disease
    or even a punishment to suffer daily
    until the moment i take my last breath.
    But this—this is unnacceptable!
    You have made me feel this filthy. 
    Unbearable sensation, this torment that
    mimics death itslef.

    Oh, My Lord who reign on the 
    Throne of Heaven and Hell,
    I can no longer bear it! 
    I have fallen in love—a love I 
    never intended to feel. 
    A love I once despised with every fiber of my being. 
    And yet, You made me feel it. 
    WHY? where did I falter?
    what sin have I committied to 
    deserve this?

    The Cruelest part is that
    I cannot return to what I was before.
    Why? Why has this stranger
    become so important to me?
    Why? does this stranger 
    feel like my entire world?
    I stand at a crossroads,
    not knowing which path to take.
    I am lost in what seems to be a divine jest—
    Yours or perhaps mine.
    `,
  },
  {
    id: "Weight_of_Tears",
    title: "The Weight of Tears",
    category: "Prose",
    date: "2024",
    fullText: `I am jealous of people bustling around.
I am jealous of the healthy people.
I get mad when people complain about a headache or a cold.
I get mad when I find myself drowning in their sympathy.

I shout at those who prayed for my new life.
I shout at those who took care of me.
There is a dent on the side of the mattress where I sleep.
There is a dent in my miserable life from lying there all day.

All I wish for is just one normal day.
All I wish is to run, to jump, to feel alive again.
I wonder if they would understand my torment,
I wonder If they would felt the same pain.

There are scars on my skin that will never fade.
There are scars that will stay with me forever.
Even a bug has a better life than mine.
Even a bug doesn’t live in misery.

The prison keeps punishing me, trying to break me.
The prison keeps breaking the broken stone of my mere existence.
Promises were made after a long, dark battle.
Promises were made—but they remain unfulfilled.

All I see is a broken man in the mirror.
All I see is a broken man,
And his reflection getting blurred by the water running down from his weary eyes.
    `,
  },
  {
    id: "Time_Paradox",
    title: "TIME",
    category: "Poetry",
    date: "2024",
    fullText: `a paradox of privilege and prejudice,
A curious duality that governs our fragile existence.
It's ironic how Time can make me feel
Both affluent and impoverished, simultaneously.

In its relentless passage, I find joy and despair,
Moments of euphoria, forever tainted by the ache of impermanence.
I'm not alone in this plight; fellow travelers join me
On this journey to eternity, bound by Time's decree.

We laugh, we love, we lose, and we lament,
Our hearts beating in rhythm with Time's unforgiving cadence.
Though Time is deemed endless, it concludes all things,
Only to initiate a new, melancholic beginning.

This cycle brings hope and pessimism, intertwined,
A hilarious contradiction, characteristic of Time's design.
A perfect yet imperfect creation, Time remains unknown,
A force that humankind can't fully comprehend or call its own.

In Time's mystery, I find solace and sorrow,
A bittersweet reminder of life's precious, fleeting tomorrow.
With each passing moment, I'm reminded to cherish and mourn,
To hold dear the beauty and brutality that Time has born.`,
  },
  // Forsaken Ká content
  {
    id: "forsaken-ka-preface",
    title: "Preface",
    category: "Novel - Forsaken Ká",
    date: "2024",
    fullText: `In the ancient symbolism of the Ankh, life, and death are entwined like inseparable lovers, Perhaps Life is defined as being locked in an embrace with death, as a man is locked to a woman; both are keys to each other... But what happens when death becomes a recurring visitor, knocking at your door again and again, only to leave you behind with unbearable agony? Imagine waking up every time, your soul dragged back from the abyss yet cursed to endure the torment of survival. You begin to pray—not for salvation, but for the mercy of a peaceful end, or perhaps, just a quick one.

This is the reality for one soul, a person whose existence is trapped in the land of heroes. A place where the air is thick with the echo of songs, sung in reverence to the brave, the fallen, and those who dared to challenge fate. Sacrifice is a melody that haunts the streets, and courage is whispered as a bedtime story to the children who dream of becoming legends.

Yet, the person we speak of never foresaw what destiny had in store for them. They did not know that their life would spiral into a cycle of death and rebirth, each time more excruciating than the last. No prophecy warned them; no omen foretold the nightmare that was coming.

This story is not about love and the consequent affection, nor about intrigue and thrilling adventures, nor even a realistic fragment of life. It is against most structurally useable narratives. Instead, it engulfs you in what death is – not the Hollywood-style grim reaper deaths. What does it like, as a human being, to be dying? Is it the slow fade to darkness or is it the desperate screaming at the body while the mind is slowly being shredded? Is it really painful, or is the agony, there and then, in the mere process of coming back?

What is more, here you shall not seek any sort of comfort in loving or any sort of satisfaction in being a hero. It is a story in which one does not only hear the characters breathe when they are alive, gasp their last when they die, and wince when they are in agony. Allow me to introduce you to a story that has no concept of death as the finality but only as the beginning of eternal suffering.
`,
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
