export const choices = [
    // OPENING
    {
        users_choice: "start",
        options: 
        {
            scene_audio: "BAR > PEOPLE TALKING > BEER GLASSES CLINKING > EERIE SILENCE...",
            scene_image: "BAR IN COLOR > FADING TO BLACK AND WHITE",
            scene_icon: `BEER MUGS`,
            scene_transition: `IMAGE FADE IN, WITH TEXT FADE IN`,
            scene_text: {
                para_one: `You are at an empty pub. You could swear that just
                a moment ago it was full of people clamouring,
                drinking and having a good time!\n You can hardly
                believe your eyes as you start exploring around to
                try and make sense of it....`,
                para_two: `After a thorough
                investigation, you find that it was like people just
                vanished....\n There are mugs on the floor just like
                someone had dropped them, spilled drinks lying on the
                bar, chairs still balancing like someone was still
                sitting on them and even the cash register is
                open. You go for the toilet to wash your face and
                try to sober up.....`,
                para_last: `You still can't find anyone when 
                suddenly, you hear a loud moan coming from
                outside of the toilet.\n Oh it has to be others. They
                must be playing a Halloween prank on me. You
                rush out of the toilet and go for....
                `,
            },
            next_choices: ["the bar area", "the front door", "the back door"]
        }
    },
    // ACT ONE, SCENE FRONT DOOR
    {
        users_choice: "the front door",
        options: {
            scene_audio: "CREEPY MOOD MUSIC > EERIE SILENCE >> CREATURE SOUND?",
            scene_image: "OLD HOUSE",
            scene_transition: ``,
            scene_icon: ``,
            scene_text: {
                para_one: `You run out of the front door, and in the fog, you can see
                something that looks like a lantern.\n It must be a lantern as
                it's bobbing left and right and moving in a direction you are
                not familiar with.\n It seems to be heading for that old house
                that was scheduled for demolishing, but it's still standing.\n
                The city council could do a better job of maintaining the
                town - you mumble to yourself.`,
                para_two: `You decide to follow it as it's
                the only thing that can give you any clues.\n It's bloody cold
                outside and the fog isn't helping, so you take another coat
                from the rack in the pub. The others won't be using it.\n
                <span class="delay-text">Probably....</span>\n
                As you rush to catch up with the lantern, you yell to try and
                slow down whoever is holding it and eventually you get to the
                old house.\n You realise it's a bit dangerous to go in and
                decide to look around.`,
                para_last: `The house isn't stable and your
                imagination is kicking into overdrive: vampires, werewolves,
                monsters... Naaah! This isn't a fairy-tale. Is it? After going
                behind the house you see a short...creature, coming out of
                the house. You get the chills down your spine, as if the fog
                and the cold aren't enough. You quickly hide and watch it as
                it's holding the lantern. It looks like it's heading to....
                `,
            },
            next_choices: ["the abandoned warehouse", "the creepy cemetery", "the ancient cave"]
        }
    },
    // ACT ONE, SCENE BACK DOOR
    {
        users_choice: "the back door",
        options: {
            scene_audio: "NEON LIGHT CRACKLING >> BACKGROUND HOWL",
            scene_image: "OLD CASTLE",
            scene_transition: ``,
            scene_icon: ``,
            scene_text: {
                para_one: `
                You rush out of the back door, and in the fog, you can see
                something that looks like a lantern.\n It must be a lantern as
                it's bobbing left and right and moving in a direction you are
                not familiar with.\n It seems to be heading for that old castle.
                <span class"delay-text">Is anyone even living there? - you ask yourself....</span>
                `,
                para_two: `
                "I thought the
                council is only maintaining that old ruin with our money for
                tourism purposes. If there were any tourists at all. It's only
                collecting cobwebs, dust, rats and who knows what." You
                decide to follow it as it's the only thing that can give you any
                clues. It's bloody cold outside and the fog isn't helping, so
                you take another coat from the rack in the pub. The others won't be using it.\n
                <span class="delay-text">Probably....</span>\n
                `,
                para_last: `
                As you rush to catch up with the lantern, you yell to try and
                slow down whoever is holding it but it's not stopping.\n
                Eventually you get to the old Castle. The castle isn't even
                stable and your imagination is starting to get the better of
                you:\n "vampires, werewolves, monsters... Naaah! This isn't a
                fairy-tale. Is it? I've been through here hundreds of times
                during daylight... Daylight... I wish I had some right now, but I
                need to get out of this mess." \n As you are a sensible person,
                you decide to go around the castle to try and investigate a
                bit, but after going around the corner, you see a
                short...creature, coming out of the castle. \n You get the chills
                down your spine, like the fog and the cold aren't enough.
                You quickly hide and watch it as it's holding the lantern and
                going to.....
                `,
            },
            next_choices: ["the creepy cemetery", "the dark forest", "the ancient cave"]
        }
    },
    // ACT ONE, SCENE BAR AREA
    {
        users_choice: "the bar area",
        options: {
            scene_audio: "OMINOUS MUSIC >> WOODEN FLOOR CREAKING >> CRACKS >> WOOOSH >> THUD >> BONES BREAKING >> FADE ",
            scene_image: "DEATH",
            scene_transition: ``,
            scene_text: {
                para_one: `
                "It might be something on the tv or radio"- you think to yourself.\n I'll just go and shut it down because
                this might be part of my friends' prank. As you go through the bar area to reach the remote and the radio,
                you hear the wooden floor creaking....
                `,
                para_two: `
                Before you can react, the floor collapses and you fall into the
                darkness.\n You find yourself lying at the base of what seems to be a deep dark hole, looking up you see only a tiny white spot that was the
                hole in the floor you fell through.\n You try to move, but your body doesn't respond! <span class="delay-text">"I must have broken
                my spine!"</span>
                `,
                para_last: `
                But before you can yell for help, an unusually large hand covers your complete face like it
                was waiting for you. You feel sudden pain, moments before you lose consciousness and realise you
                have died
                `,
            },
            scene_jumpscare: {
                jumpscare_image: `DEATH`,
                jumpscare_audio: `OMINOUS SAD MUSIC`,
            },
            next_choices: ["credits", "credits", "credits"]
        }
    },
    // ACT TWO SCENE ABANDONED WAREHOUSE
    {
        users_choice: "the abandoned warehouse",
        options: {
            scene_audio: "LOTS OF REVERB >> AMBIENT CREEPY SOUNDS >> CREATURE GROWLS >> RUNNING/PANTING",
            scene_image: "ABANDONED WAREHOUSE > FOG?",
            scene_transition: `FADE IN FROM RIGHT`,
            scene_text: {
                para_one: `
                "Was that...fur? Or a tentacle on its body? This fog is starting to play tricks on me.
                I'll follow it from a safe distance. I NEED to get to the bottom of this. Why isn't
                there anyone around???" Questions start racing in your mind.\n
                The old house wasn't too far from the abandoned warehouse where the
                creature was going. In fact, the owner of the warehouse used to own them both.
                When you're rich, you don't have to commute that far. \n
                You decide to follow the lantern from a safe distance without seeing the
                creature so it cannot see you. You hope. You again see the lantern going
                towards that old warehouse. "I'm sure they are pulling a prank on me" - you
                think to yourself. But how far does it go?
                The creature went through the broken warehouse door and went into one of the
                corners. It started going around in circles, looking at the floor like it was looking
                for something. It stopped, hit the ground with what seemed to be a foot. You
                haven't seen it walking so far, more like floating, as a ghost .....
                `,
                para_two: `
                After it hit the ground, a thin pole started rising, and as it was rising, the
                creature put the lantern on it. When it rose to its final height, the lantern started
                emitting smoke and when it hit you, it was the worst smell you ever smelled in
                your life.\n You fall on the ground trying to crawl away from it, but when you turn to
                the warehouse exit, the outside looks like a thick dark wall. Like nothing is
                beyond it and no light can penetrate it. "I'm trapped!" - the thought quickly
                passes through your mind as fear overwhelms you....\n
                `,
                para_last: `
                Suddenly, monsters start to emerge from the dark, badly painted, mold covered walls! 
                It is as if creatures from every fairy tale of <span class="creepy-text">horror</span> have come to life right in front of you!\n
                Before you lose your mind to fear, a brief, lucid moment interferes and a thought
                passes you mind like lightning: "Where's the creature???" - you ask yourself.\n
                You try to cover your nose and mouth with your hand, but you're shaking too much.\n
                You've got to escape...\n
                Adrenaline overtakes your fear, and gives you strength you never knew
                you had as you run faster and faster, dodging creatures and old broken machinary...\n 
                You run through a jumble of dirty broken furniture, your right foot gets caught on a cracked brick lying in the way, and you nearly lose your balance....
                Suddenly! You spot the creature leaving through the door on the other side of the
                warehouse...
                In shock, no matter how logical or illogical it sounds, you decide it's best to......
                `,
            },
            scene_jumpscare: {
                jumpscare_image: `GHOUL`,
                jumpscare_audio: `FOOTSTEPS >> METAL POLE HITTING GROUND >> ANIMAL RUNNING AWAY`,
            },
            next_choices: ["follow the creature to the dingy hotel", "follow the creature to the medieval church", "not follow the creature"]
        }
    },
    // ACT TWO SCENE THE CREEPY CEMETERY
    {
        users_choice: "the creepy cemetery",
        options: {
            scene_audio: "CREEPY BACKGROUND NOISES",
            scene_image: "CEMETERY",
            scene_transition: `FLASH FADE IN`,
            scene_icon: `CEMETERY`,
            scene_text: {
                para_one: `
                "Was that...fur? Or a tentacle on its body? This fog is starting to play tricks on me.
                I'll follow it from a safe distance. I NEED to get to the bottom of this. Why isn't
                there anyone around???"\n Questions start racing in your mind.
                You decide to follow the light of the lantern from a safe distance without seeing
                the creature so it cannot see you.... <span class="creepy-text">You hope</span>.\n 
                You again see lantern starting to climb up.
                `,
                para_two: `
                It must be that old cemetery, up on the hill. You recall reading in the paper that
                some local archaeologist had recently discovered a mass grave nearby, dating to the early 1400's...\n
                The mausoleum they erected on it sure was strange. Nobody could explain
                what religion that is, "but that's probably the case with most modern churches
                and temples." - you think to yourself.\n
                The creature left the lantern on a pole in the middle of the cemetery, just in
                front of the chapel. "What is...it up to?"...
                `,
                para_last: `
                Without warning, the lantern glows so bright that it temporarily
                blinds you... \n And then you hear howling, like somebody released hundreds
                of hounds... It starts the distance but gets closer and closer. "Where's the
                creature???" - you ask yourself after rubbing your eyes.\n You still haven't
                regained your vision completely when something brushes your shoulder and
                knocks you to the ground. The jolt seems to clear your head and you suddenly spot the creature just ahead of you.
                In shock, no matter how logical or illogical it sounds, you decide it's best that you......
                `,
            },
            scene_jumpscare: {
                jumpscare_image: ``,
                jumpscare_audio: ``,
            },
            next_choices: [ "don't follow the creature", "follow the creature to the dingy hotel", "follow the creature to the local hospital"]
        }
    },
    // ACT TWO SCENE DARK FOREST
    {
        users_choice: "the dark forest",
        options: {
            scene_audio: "CREEPY FOREST AMBIENT SOUNDS",
            scene_image: "DARK FOREST",
            scene_transition: `FADE IN WITH DARK OVERLAY`,
            scene_icon: `FOREST`,
            scene_text: {
                para_one: `
                You run after the creature without thinking, directly into the dark forest...\n
                As the sky overhead closes in on you, the trees become so thick that you can no longer see the stars and trip over an exposed tree root.
                "Was that...fur? Or a tentacle on its body? This fog is starting to play tricks on me." You shake your head to try and clear your thoughts
                but the questions keep racing through your mind
                "Why isn't there anyone around??? I NEED to get to the bottom of this. I'll follow it from a safe distance."\n
                You see the light of the lantern flickering through the trees and run towards it...
                `,
                para_two: `
                Before you know it
                you're out of the woods and in an open park, and you remember that part of the forest
                was repurposed as a park recently. They brought in some weird looking people
                to survey the area, and the engineers weren't far from odd. It made for an odd
                park with those weird looking playground things. It's a miracle it passed the
                inspection with all those pointy poles and weird materials.\n One would think a
                spongy material like that couldn't hold the whole swing set, but you've seen
                stranger things.\n It looks like the fog is retreating and you watch as the <span class="creepy-text">creature</span> nears the
                playground in the middle...\n
                `,
                para_last: `
                It starts digging, "it must be looking for something". Suddenly a
                pole starts coming out of the ground.
                The creature leaves the lantern on the pole and as soon as it is hanging, a loud
                shriek fills the air making you temporarily deaf. Fog, cold, weird stuff in the dark
                and now... You don't even get to finish your thought, as something dark starts
                emerging from the ground. Corpses of people, dead long ago, start rising!
                You decide this is no longer a place for you. Looking around, you realise that a
                thick cover of darkness has covered everything outside of the park and just as the creatures
                close in on you, you decide it's best that you......
                `,
            },
            scene_jumpscare: {
                jumpscare_image: `ZOMBIES`,
                jumpscare_audio: `ZOMBIE SCREECH`,
            },
            next_choices: ["follow the creature to the local hospital", "don't follow the creature", "follow the creature to the medieval church"]
        }
    },
    // ACT TWO SCENE ANCIENT CAVE
    {
        users_choice: "the ancient cave",
        options: {
            scene_audio: "DEATH",
            scene_image: "CAVE",
            scene_transition: `FLICKER`,
            scene_icon: ``,
            scene_text: {
                para_one: `
                "Was that...fur? Or a tentacle on its body? This fog is starting to play tricks on me. I'll follow it from a safe distance.
                I NEED to get to the bottom of this. Why isn't there anyone around???"
                `,
                para_two: `
                You decide to follow just the light of the lantern from a distance without seeing the creature so it can't see you.
                You hope. Suddenly, light becomes dimmer and then disappears altogether!\n
                You run faster towards where you last saw the light and come across an ancient cave.\n
                You had no idea this cave existed, and you move closer to investigate...
                `,
                para_last: `
                Suddenly you feel a sharp pain as you are hit on the head. You hear a loud growl, and odd laboured breaths. A hideous creature emerges, you can smell its breath, 
                "what an awful stench", and feel droplets of spit hitting your face with each of the foul breaths.  The massive creature sinks it's claws into your legs, and 
                drags you into the cave.\n As you begin to lose consciousness, you notice crude wall art of a hideous creature, with <span class="creepy-text">blood-red eyes</span>, 
                painted on the wall of the cave.\n
                The various depictions of the creature on the cave wall very much resemble the monster right now tearing at your legs,
                and a final thought enters your head,\n
                "I wonder if the people who painted that also died like this, right here in this cave..."
                `,
            },
            scene_jumpscare: {
                jumpscare_image: `WEREWOLF`,
                jumpscare_audio: `GROWLS`,
            },
            next_choices: ["credits", "credits", "credits"]
        }
    }
]