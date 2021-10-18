export const choices = [
    // OPENING
    {
        users_choice: "start",
        options: 
        {
            scene_audio: "",
            scene_audio_volume: "",
            scene_audio_delay: "",

            scene_image: "BAR IN COLOR > FADING TO BLACK AND WHITE",
            scene_icon: `BEER MUGS`,
            scene_transition: `IMAGE FADE IN, WITH TEXT FADE IN`,

            para_one_audio: "",
            para_one_audio_volume: "",
            para_one_audio_delay: "",

            para_two_audio: "",
            para_two_audio_volume: "",
            para_two_audio_delay: "",

            para_last_audio: "",
            para_three_audio_volume: "",
            para_three_audio_delay: "",
            
            scene_text: {
                para_one: `
                <span class="creepy-text">Our story starts...</span><br />
                 ...on a Halloween late afternoon. It's Friday and your
                   work for today is finally done! <br /> You can now go home, and you have 
                   been looking forward to it. A Halloween brings that special 
                   atmosphere that is unique to it. Two days off and no obligations fill
                   you with satisfaction and put a smile on your face.<br /> Children will be 
                   wearing costumes and going trick or treating. You don't have to 
                   worry about your kids' costumes, as you already took care of that 
                   the day before - today is a perfect day. You can go to a pub near 
                   your house to celebrate being free from obligations (no matter 
                   how brief it is), before you go home.<br /> You notice a chill in the air as 
                   winter is showing its teeth earlier than usual. Well, that's climate 
                   change for you. You shrug your shoulders as you pull your coat 
                   higher to try and cover your throat as much as you can before you 
                   get into your car...<br />
                   You get out of your car near your local pub so you can walk home, 
                   just in case. While approaching the door, you get a strange feeling
                   that the fog has gotten thicker on your way from work. You look 
                   around before you go for the door, but except the fog, nothing 
                   seems out of the ordinary and a sudden chilly wind sweeps you. 
                   "Brrr! Better get inside" - you think to yourself.<br /> After entering the 
                   pub you can smell your favourite drink, warm atmosphere and your
                   friends are already there. "Give me a quick one, before I go 
                   home!" - you say at the entrance, before taking your coat off. You 
                   greet and chit-chat with your friends while progressing towards 
                   the bar. What a perfect evening for a Halloween.
                   Your friends convince you to have another drink before you go 
                   home, and drinks just keep coming... You forget about time as 
                   hours pass and your busy day has made you feel sleepy. You nod 
                   off but quickly snap out of it to realise everyone is gone...
                `,
                para_two: `You are at an empty pub. You could swear that just
                a moment ago it was full of people clamouring,
                drinking and having a good time!<br /> You can hardly
                believe your eyes as you start exploring around to
                try and make sense of it....<br/>
                After a thorough
                investigation, you find that it was like people just
                vanished....<br /> There are mugs on the floor just like
                someone had dropped them, spilled drinks lying on the
                bar, chairs still balancing like someone was still
                sitting on them and even the cash register is
                open. You go for the toilet to wash your face and
                try to sober up.....`,
                para_last: `You still can't find anyone when 
                suddenly, you hear a loud moan coming from
                outside of the toilet.<br /> Oh it has to be others. They
                must be playing a Halloween prank on me. You
                rush out of the toilet and go for....
                `,
            },
            scene_jumpscare: {
                jumpscare_image: `DEATH`,
                jumpscare_audio: `OMINOUS SAD MUSIC`,
            },
            next_choices: ["the bar area", "the front door", "the back door"]
        }
    },
    // ACT ONE, SCENE FRONT DOOR
    {
        users_choice: "the front door",
        options: {
            scene_audio: "",
            scene_audio_volume: "",
            scene_audio_delay: "",

            scene_image: "OLD HOUSE",
            scene_transition: ``,
            scene_icon: ``,

            para_one_audio: "",
            para_one_audio_volume: "",
            para_one_audio_delay: "",

            para_two_audio: "",
            para_two_audio_volume: "",
            para_two_audio_delay: "",

            para_last_audio: "",
            para_three_audio_volume: "",
            para_three_audio_delay: "",

            scene_text: {
                para_one: `You run out of the front door, and in the fog, you can see
                something that looks like a lantern.<br /> It must be a lantern as
                it's bobbing left and right and moving in a direction you are
                not familiar with.<br /> It seems to be heading for that old house
                that was scheduled for demolishing, but it's still standing.<br />
                The city council could do a better job of maintaining the
                town - you mumble to yourself.`,
                para_two: `You decide to follow it as it's
                the only thing that can give you any clues.<br /> It's bloody cold
                outside and the fog isn't helping, so you take another coat
                from the rack in the pub. <br />The others won't be using it.<br />
                <span class="cursed-text">Probably....</span><br />
                As you rush to catch up with the lantern, you yell to try and
                slow down whoever is holding it and eventually you get to the
                old house.<br /> You realise it's a bit dangerous to go in and
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
            scene_audio: "",
            scene_image: "",
            scene_transition: ``,
            scene_icon: ``,
            scene_text: {
                para_one: `
                You rush out of the back door, and in the fog, you can see
                something that looks like a lantern.<br /> It must be a lantern as
                it's bobbing left and right and moving in a direction you are
                not familiar with.<br /> It seems to be heading for that old castle.
                <span class"delay-text">Is anyone even living there? - you ask yourself....</span>
                `,
                para_two: `
                "I thought the
                council is only maintaining that old ruin with our money for
                tourism purposes. If there were any tourists at all. It's only
                collecting cobwebs, dust, rats and who knows what." You
                decide to follow it as it's the only thing that can give you any
                clues. It's bloody cold outside and the fog isn't helping, so
                you take another coat from the rack in the pub.<br /> The others won't be using it.<br />
                <span class="cursed-text">Probably....</span><br />
                `,
                para_last: `
                As you rush to catch up with the lantern, you yell to try and
                slow down whoever is holding it but it's not stopping.<br />
                Eventually you get to the old Castle. The castle isn't even
                stable and your imagination is starting to get the better of
                you:<br /> "vampires, werewolves, monsters... Naaah! This isn't a
                fairy-tale. Is it? I've been through here hundreds of times
                during daylight... Daylight... I wish I had some right now, but I
                need to get out of this mess." <br /> As you are a sensible person,
                you decide to go around the castle to try and investigate a
                bit, but after going around the corner, you see a
                short...creature, coming out of the castle. <br /> You get the chills
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
            scene_audio: "",
            scene_image: "",
            scene_transition: ``,
            scene_text: {
                para_one: `
                "It might be something on the tv or radio"- you think to yourself.<br /> I'll just go and shut it down because
                this might be part of my friends' prank. As you go through the bar area to reach the remote and the radio,
                you hear the wooden floor creaking....
                `,
                para_two: `
                Before you can react, the floor collapses and you fall into the
                darkness.<br /> You find yourself lying at the base of what seems to be a deep dark hole, looking up you see only a tiny white spot that was the
                hole in the floor you fell through.<br /> You try to move, but your body doesn't respond! <span class="delay-text">"I must have broken
                my spine!"</span>
                `,
                para_last: `
                But before you can yell for help, an unusually large hand covers your complete face like it
                was waiting for you. You feel sudden pain, moments before you lose consciousness and realise you
                have died </p>
                `,
            },
            scene_jumpscare: {
                jumpscare_image: `DEATH`,
                jumpscare_audio: `OMINOUS SAD MUSIC`,
            },
            next_choices: ["fade into oblivion"]
        }
    },
    // ACT TWO SCENE ABANDONED WAREHOUSE
    {
        users_choice: "the abandoned warehouse",
        options: {
            scene_audio: "",
            scene_image: "",
            scene_transition: `FADE IN FROM RIGHT`,
            scene_text: {
                para_one: `
                "Was that...fur? Or a tentacle on its body? This fog is starting to play tricks on me.
                I'll follow it from a safe distance. I NEED to get to the bottom of this. Why isn't
                there anyone around???" Questions start racing in your mind.<br />
                The old house wasn't too far from the abandoned warehouse where the
                creature was going. In fact, the owner of the warehouse used to own them both.
                When you're rich, you don't have to commute that far. <br />
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
                your life.<br /> You fall on the ground trying to crawl away from it, but when you turn to
                the warehouse exit, the outside looks like a thick dark wall. Like nothing is
                beyond it and no light can penetrate it. "I'm trapped!" - the thought quickly
                passes through your mind as fear overwhelms you....<br />
                `,
                para_last: `
                Suddenly, monsters start to emerge from the dark, badly painted, mold covered walls! 
                It is as if creatures from every fairy tale of <span class="creepy-text">horror</span> have come to life right in front of you!<br />
                Before you lose your mind to fear, a brief, lucid moment interferes and a thought
                passes you mind like lightning: "Where's the creature???" - you ask yourself.<br />
                You try to cover your nose and mouth with your hand, but you're shaking too much.<br />
                You've got to escape...<br />
                Adrenaline overtakes your fear, and gives you strength you never knew
                you had as you run faster and faster, dodging creatures and old broken machinary...<br /> 
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
            scene_audio: "",
            scene_image: "",
            scene_transition: `FLASH FADE IN`,
            scene_icon: ``,
            scene_text: {
                para_one: `
                "Was that...fur? Or a tentacle on its body? This fog is starting to play tricks on me.
                I'll follow it from a safe distance. I NEED to get to the bottom of this. Why isn't
                there anyone around???"<br /> Questions start racing in your mind.
                You decide to follow the light of the lantern from a safe distance without seeing
                the creature so it cannot see you.... <span class="creepy-text">You hope</span>.<br /> 
                You again see lantern starting to climb up.
                `,
                para_two: `
                It must be that old cemetery, up on the hill. You recall reading in the paper that
                some local archaeologist had recently discovered a mass grave nearby, dating to the early 1400's...<br />
                The mausoleum they erected on it sure was strange. Nobody could explain
                what religion that is, "but that's probably the case with most modern churches
                and temples." - you think to yourself.<br />
                The creature left the lantern on a pole in the middle of the cemetery, just in
                front of the chapel. "What is...it up to?"...
                `,
                para_last: `
                Without warning, the lantern glows so bright that it temporarily
                blinds you... <br /> And then you hear howling, like somebody released hundreds
                of hounds... It starts the distance but gets closer and closer. "Where's the
                creature???" - you ask yourself after rubbing your eyes.<br /> You still haven't
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
            scene_audio: "",
            scene_image: "",
            scene_transition: `FADE IN WITH DARK OVERLAY`,
            scene_icon: ``,
            scene_text: {
                para_one: `
                You run after the creature without thinking, directly into the dark forest...<br />
                As the sky overhead closes in on you, the trees become so thick that you can no longer see the stars and trip over an exposed tree root.
                "Was that...fur? Or a tentacle on its body? This fog is starting to play tricks on me." You shake your head to try and clear your thoughts
                but the questions keep racing through your mind
                "Why isn't there anyone around??? I NEED to get to the bottom of this. I'll follow it from a safe distance."<br />
                You see the light of the lantern flickering through the trees and run towards it...
                `,
                para_two: `
                Before you know it
                you're out of the woods and in an open park, and you remember that part of the forest
                was repurposed as a park recently. They brought in some weird looking people
                to survey the area, and the engineers weren't far from odd. It made for an odd
                park with those weird looking playground things. It's a miracle it passed the
                inspection with all those pointy poles and weird materials.<br /> One would think a
                spongy material like that couldn't hold the whole swing set, but you've seen
                stranger things.<br /> It looks like the fog is retreating and you watch as the <span class="creepy-text">creature</span> nears the
                playground in the middle...<br />
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
            scene_audio: "",
            scene_image: "",
            scene_transition: `FLICKER`,
            scene_icon: ``,
            scene_text: {
                para_one: `
                "Was that...fur? Or a tentacle on its body? This fog is starting to play tricks on me. I'll follow it from a safe distance.
                I NEED to get to the bottom of this. Why isn't there anyone around???"
                `,
                para_two: `
                You decide to follow just the light of the lantern from a distance without seeing the creature so it can't see you.
                You hope. Suddenly, light becomes dimmer and then disappears altogether!<br />
                You run faster towards where you last saw the light and come across an ancient cave.<br />
                You had no idea this cave existed, and you move closer to investigate...
                `,
                para_last: `
                Suddenly you feel a sharp pain as you are hit on the head. You hear a loud growl, and odd laboured breaths.<br /> A hideous creature emerges, you can smell it, 
                "what an awful stench", and feel droplets of spit hitting your face with each of the foul breaths. The massive creature grabs you by your legs, and 
                drags you into the cave.<br /> As you begin to lose consciousness, you notice crude wall art of a hideous creature, with <span class="creepy-text">blood-red eyes</span>, 
                painted on the wall of the cave.<br />
                The various depictions of the creature on the cave wall look familiar,
                and a final thought enters your head,<br />
                "I wonder if the people who painted that also died like this, right here in this cave..."
                `,
            },
            scene_jumpscare: {
                jumpscare_image: `WEREWOLF`,
                jumpscare_audio: `GROWLS`,
            },
            next_choices: ["fade into oblivion"]
        }
    },
    // ACT THREE SCENE DINGY HOTEL
    {
        users_choice: "follow the creature to the dingy hotel",
        options: {
            scene_audio: "",
            scene_image: "",
            scene_transition: `FADE IN > NEON FLASHING?`,
            scene_icon: ``,
            scene_text: {
                para_one: `
                You rush towards the lantern light, trying to escape whatever hell and its minions this creature summoned. As you
                run, you see the <span class="creepy-text">creature</span> opening what seems to be a secret entrance to the city hotel. 
                Wasting no time, you run inside, closing the
                door behind you.<br /> You need to make sure that whatever is lurking outside can't get in. You grab chairs, there are 
                a couple of small statues, and whatever else
                you can find and bar them against the door. Out of breath, you look at your poorly constructed barricade hoping it will hold...
                `,
                para_two: `
                But you forgot about the creature... You slowly turn around to see it pointing at the bright light in the reception
                area. It couldn't approach and it looked like it was trying to destroy it. "If it is trying to destroy it, it must be good for
                me" - you think. You hesitate whether to run and destroy it or grab it and throw it at the creature.<br />
                While deciding what to do, you realise that the statues in the lobby came alive and are holding you. It looks like the
                creature is controlling them as it's waving at them. Unable to move, they lift you up above the chandelier which is
                projecting an image to the ceiling. It's depicting a story about a curse of the creature's ancestors
                `,
                para_last: `
                When the first people appeared on Earth, there was chaos, and all manner of creatures flourished from it. Humans
                managed to harness the light through fire and drove the creatures away into the underground. Light wasn't very
                kind to them as it burned their skin and killed them slowly.<br /> Since that day, every Halloween, a creature emerges
                from the underground, grabs a weakened light, which is the lantern, and tries to destroy the light by powering the
                chaos it can fuel with the weakened light's energy. This is the only time in the year when the true light is
                weakened but it's still too strong for many creatures to go through this ritual so they send only one, in hope that
                the chaos can overwhelm the one true light.<br />
                You watch as the story unfolds. As the projection has come to an end, statues release their grip on you, and gently
                put you on the ground. You are not sure whether the creature was trying to help you, or was it trying to scare off
                the statues. This could only mean that one of the two have to be destroyed.
                Realising this, you decide to...
                `,
            },
            next_choices: ["destroy the creature", "do nothing", "try and escape"]
        }
    },
    // ACT THREE MEDIEVAL CHURCH
    {
        users_choice: "follow the creature to the medieval church",
        options: {
            scene_audio: "",
            scene_image: "",
            scene_transition: `FADE IN FROM LEFT`,
            scene_icon: ``,
            scene_text: {
                para_one: `
                You follow the creature to the church, you see the side door is open, you rush in and slam the door behind you. You need to 
                make sure whatever is outside can't get in. You run around grabbing anything and everything available.<br />
                You grab some church benches, a couple of statues, and whatever else you can find and bar them against the door. Out of breath, you look at
                the door hoping it will hold...
                `,
                para_two: `
                But you forgot about the creature... You slowly turn around to see it pointing at the bright light at the altar. It
                couldn't approach and it looked like it was trying to destroy it. "If it is trying to destroy it, it must be good for me" -
                you think. You hesitate whether to run and destroy it or try to escape.<br />
                While deciding what to do, you realise that the pictures on the wall are different than the ones in any other light.
                They are depicting a story about a curse of the creatures ancestors.
                `,
                para_last: `
                When the first people appeared on Earth, there was chaos, and the creatures flourished from it. Humans
                managed to harness the light through fire and drove the creatures away into the underground. Light wasn't very
                kind to them as it burned their skin and killed them slowly.<br /> Since that day, every Halloween, a creature emerges
                from the underground, grabs a weakened light, which is the lantern, and tries to destroy the light by powering the
                chaos it can fuel with the weakened light's energy. This is the only time in the year when the true light is
                weakened but it's still too strong for many creatures to go through this ritual so they send only one, in hope that
                the chaos can overwhelm the one true light.<br />
                Realising this, you decide to
                `,
            },
            scene_jumpscare: {
                jumpscare_image: `PRIEST`,
                jumpscare_audio: `SCREAM`,
            },
            next_choices: ["try and escape", "destroy the creature", "destroy the light"]
        }
    },
    // ACT THREE LOCAL HOSPITAL
    {
        users_choice: "follow the creature to the local hospital",
        options: {
            scene_audio: "",
            scene_image: "",
            scene_transition: `FADE IN FROM RIGHT`,
            scene_icon: ``,
            scene_text: {
                para_one: `
                You follow the creature to the hospital, but as soon as you rush inside the front door the lights go out.
                Everything goes completely dark. Your out of breath, you look around trying to find your bearings when you realize...<br />
                "You forgot about the creature...!"<br /> Suddenly an extremely bright light blinds you for a second, when your vision returns
                you see the outline of the creature, surround by the light. It comes into focus and it seems to be pointing at you. 
                `,
                para_two: `
                You watch
                as the creature turns and points directly at the bright light in the middle of the
                large waiting room. It couldn't approach and it looked like it was trying to destroy it. "If the creature is trying to destroy the light, the light
                might be something I can use to destroy the the creature" - you think.<br />
                You rush to the bright light trying to throw it at the creature, but as soon as you touch it, it overwhelms you 
                you find yourself in a haze of light, swirling all around you and then, you see visions of the world long past...
                `,
                para_last: `
                When the first people appeared on Earth, there was chaos, and the creatures flourished from it. Humans
                managed to harness the light through fire and drove the creatures away into the underground. Light wasn't very
                kind to them as it burned their skin and killed them slowly. Since that day, every Halloween, a creature emerges
                from the underground, grabs a weakened light, which is the lantern, and tries to destroy the light by powering the
                chaos it can fuel with the weakened light's energy.<br /> This is the only time in the year when the true light is
                weakened but it's still too strong for many creatures to go through with this ritual so they send only one, in hope
                that the chaos can overwhelm the one true light.
                Seeing all this, you decide to...
                `,
            },
            scene_jumpscare: {
                jumpscare_image: ``,
                jumpscare_audio: ``,
            },
            next_choices: ["do nothing", "try and escape", "destroy the light"]
        }
    },
    // ACT THREE DON'T FOLLOW THE CREATURE
    {
        users_choice: "don't follow the creature",
        options: {
            scene_audio: "",
            scene_image: "",
            scene_transition: `FLASHING RED AND ORANGE`,
            scene_icon: ``,
            scene_text: {
                para_one: `
                You hesitate as you watch the creature disappear and your mind turns towards more pressing matters
                as the creatures of the undead are closing in. Suddenly two of them are right in front of you, you jump to the side
                and begin running in no particular direction...<br />
                `,
                para_two: `
                The fog has gotten thicker, and it's getting harder to see where you are and where you're going, but you can hear the
                monsters getting closer as you try to run faster and faster. You're getting tired and are starting to lose strength in your legs.
                Your breathing is labored and you can feel your heart beating, it's beating so incredibly fast...<br />
                `,
                para_last: `
                Suddenly out of nowhere you trip and fall, smashing face first into the ground. You sit up dis-oriented, your senses overwhelmed.
                The sounds of the undead are getting louder, you can feel their presense now in the fog, hear them inside your head, they're everywhere.
                It sounds like there are thousands of them...<br />
                You try to clear your head and attempt to stand up, but you've sprained your ankle and you collapse in pain.
                You begin to panic and just as the undead overwhelm you suddenly a thought pops into your head, "what happened to my friends...?" you wonder
                as you lose consciousness and die...
                `,
            },
            scene_jumpscare: {
                jumpscare_image: ``,
                jumpscare_audio: ``,
            },
            next_choices: ["fade into oblivion"]
        }
    },
    // FINAL ACT DESTROY THE CREATURE
    {
        users_choice: "destroy the creature",
        options: {
            scene_audio: "",
            scene_image: "",
            scene_transition: `FLASHING RED AND ORANGE`,
            scene_icon: ``,
            scene_text: {
                para_one: `
                As you pull yourself together, you know the right thing to do is to kill the creature. You grab the closest metal bar
                and hit the creature.<br /> Weakened by the light, the creature falls back a couple of footsteps, releases a high pitched
                shriek and dies. Its body starts to decompose right before your eyes before you can get a good look at it.
                At that moment, light from the light source starts to overwhelm the space. It blinds you making you disoriented.
                Not even your eyelids are helping as you receive another vision:
                `,
                para_two: `
                Another creature made entirely out of light, considerably bigger than the one you were chasing, thanks you for
                protecting the light for another cycle.<br /> As it pulls away in something that could only be described as light at the end
                of a tunnel, you find yourself back where you started from. Space around you is filled with morning light, you feel
                completely refreshed like something has recharged your batteries.<br /> There's a queue of people waiting to get
                inside who were surprised by your presence, but nobody is paying too much attention. What a world we live in.
                `,
                para_last: `
                "That was some night" you say to yourself. "I only need to find out if it was all true or if it was just a drunken
                fantasy." Never mind - even if you tell it to someone, no one would believe you. Some psychiatrists might be
                interested, but that's about it.
                You dust yourself and go home to your family
                `,
            },
            scene_jumpscare: {
                jumpscare_image: `PUMPKINS`,
                jumpscare_audio: `SCREECH`,
            },
            next_choices: ["credits"]
        }
    },
    // FINAL ACT DO NOTHING
    {
        users_choice: "do nothing",
        options: {
            scene_audio: "",
            scene_image: "",
            scene_transition: `FADE`,
            scene_icon: ``,
            scene_text: {
                para_one: `
                As you pull yourself together, you realise that this has to be some kind of a dream, or a hallucination - it has to be.
                All of this is too much for you. You grab your head, kneel on the floor and with closed eyes release the loudest
                shout you could.<br /> At that moment, the clock strikes midnight, the creature's window to destroy the light has
                passed, and the light is back to its full strength. The light starts to overwhelm the space. It blinds you making you
                disoriented. Not even your eyelids are helping as you pass out <br />
                and everything<br /> 
                <span class="fade-in">goes dark...</span>
                `,
                para_two: `
                
                `,
                para_last: `
                You awake feeling good like never before, like something has recharged your batteries. No trace of the
                creature or the light. There's a wonderful morning outside and the maintenance guy is calling the security. "That
                was some night" you say to yourself as an un-easy feeling comes over you.
                "I only need to find out if it was all true or if I was just blindly drunk." 
                Never mind - even if it was true,<br />  no one would believe your story...<br />
                You stand up and go home to your family...
                
                `,
            },
            scene_jumpscare: {
                jumpscare_image: ``,
                jumpscare_audio: ``,
            },
            next_choices: ["credits"]
        }
    },
    // FINAL ACT DESTROY THE LIGHT
    {
        users_choice: "destroy the light",
        options: {
            scene_audio: "",
            scene_image: "",
            scene_transition: `FLASHING LIGHT`,
            scene_icon: ``,
            scene_text: {
                para_one: `
                After all you've been through, for no logical reason whatsoever, you decide to help the creature. 
                You see a large metal bar, you grab it and start smashing the light.<br /> It works, but not completely. The
                creature points at the bowl with water and then at the light.<br /> You take the bowl and splash it
                on the light. The creature encourages you to keep smashing the light as it starts emitting a
                very loud and worrying noise.
                `,
                para_two: `
                As the light becomes dimmer and dimmer, an impenetrable darkness, like
                a thick musty dark fog, is starting to overwhelm the space and overwhelm the area.
                All those things at the door couldn't stop it...
                `,
                para_last: `
                You realise you've made a mistake. Dark, thick, cold fog is starting to envelop you. You see a
                spot of light, a strange thought flashes through your mind, "...did I leave the stove on...?"<br />
                You suddenly shiver as everything fades to darkness as your mind fades into oblivion...
                `,
            },
            scene_jumpscare: {
                jumpscare_image: ``,
                jumpscare_audio: ``,
            },
            next_choices: ["fade into oblivion"]
        }
    },
    // FINAL ACT TRY AND ESCAPE
    {
        users_choice: "try and escape",
        options: {
            scene_audio: "",
            scene_image: "",
            scene_transition: `FLASHING RED AND ORANGE`,
            scene_icon: ``,
            scene_text: {
                para_one: `
                The images, the monsters, the fog....all of it is too much for you. Panic is overwhelming you
                and you are looking for a way to escape this space, this room or whatever it has become.<br />
                Hastily looking around, you see a door. You run towards it, trying to avoid
                the creature and the light and in full sprint, you ram the wooden door.
                `,
                para_two: `
                The door breaks and
                you start falling down the stairs that you didn't realise were there. "I just wanted to escape"
                - words are circling in your head as you tumble down the stairs. Realising you are unable to
                do anything and that you're falling into your doom, you can feel no pain...
                `,
                para_last: `
                As you finally land,
                you are unable to move and the small cone of light that was coming from the broken door,
                starts to fade. Roars, cold and dark are the last things you can remember before you lose
                consciousness and die...
                `,
            },
            scene_jumpscare: {
                jumpscare_image: ``,
                jumpscare_audio: ``,
            },
            next_choices: ["fade into oblivion"]
        }
    },
    {
        users_choice: "fade into oblivion",
        options: {
            scene_audio: "",
            scene_image: "",
            scene_transition: `FLASHING RED AND ORANGE`,
            scene_icon: ``,
            scene_text: {
                para_one: `
                Your choices have led you to your end...
                `,
                para_two: `
                However you look up and right before your eyes a strange object begins to glow... <br />
                You walk up and inspect the object and read these words...
                `,
                para_last: `
                Why not try the story again? Try out different choices to discover what's it all about.
                `,
            },
            scene_jumpscare: {
                jumpscare_image: ``,
                jumpscare_audio: ``,
            },
            next_choices: ["try again"]
        }
    },
    {
        users_choice: "credits",
        options: {
            scene_credits: true,
            scene_audio: "",
            scene_image: "../static/assets/images/dancing-dance.gif",
            scene_transition: ``,
            scene_icon: ``,
            scene_text: {
                ending_credits: `
                <img src="../static/assets/images/dancing-dance.gif" alt="dancing pumpkin head people"><br />
                <h3 class="align-self-center skwoop">Story Author: Vladimir M</h3> 
                
                <h5 class="skwoop">A <span class="creepy-text">Normal</span> night at the pub experience was brought to you by: </h5>
                <p class="skwoop">

                <span class="skwoop">Team Scramblin Spiders</span> <br />

                <span class="skwoop">Marina Christen</span> <br />
                <span class="skwoop">Carla Buongiorno</span> <br />
                <span class="skwoop">Vladimir M</span> <br />
                <span class="skwoop">John Traas</span> <br />
                <span class="skwoop">Aws Sabah Gheni</span> <br />
                </p>
                <p class="skwoop">
                A massive thank you to the organizers of Code Institute Spookathon - 2021 <br />
                To our fearless community leader: Jim Morel 🙌 <br />
                To our amazing Hack Leads: Anthony O' Brien 🤜 and Gaff 🥃 <br />
                We can't thank you enough! <br />
                </p>
                <p class="skwoop">
                From all of us to all of you, thank you so much! We had a ton of fun, and an extreme lack of sleep,
                creating this project. Working together to realize it was such a great experience!
                </p> 
                
                `,
            },
            scene_jumpscare: {
                jumpscare_image: ``,
                jumpscare_audio: ``,
            },
            next_choices: ["skip credits"]
        }
    }
]