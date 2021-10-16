export const choices = [
    {
        users_choice: "start",
        options: 
        {
            intro_audio: "../static/assets/audio/background/mixkit-coarse-tone-mic-distortion-2130.wav",
            story_image: "",
            story_text: {
                para_one: `You are at an empty pub. 
                You could swear that just a moment ago it was full of people clamouring,
                 drinking and having a good time.....`,
                para_two: `You can hardly believe your eyes as 
                you start exploring around to try and make sense of it. 
                After a thorough investigation, you find that it was like 
                people just vanished as there were mugs on the floor just 
                like someone had dropped them, spilled drinks on the bar, 
                chairs still balancing like someone was still sitting on them 
                and even the cash register is open. You go for the toilet to 
                wash your face and try to sober up. You still can't find 
                anyone.`,
                para_last: `Suddenly, you hear a loud moan coming from outside of 
                the toilet. Oh it must be the rest. They must be playing a 
                Halloween prank on me. You rush out of the toilet and go 
                for the...
                `,
            },
            next_choices: ["front door", "back door", "bar area"]
        }
    },
    {
        users_choice: "front door",
        options: {
            intro_audio: "",
            story_image: "",
            story_text: {
                para_one: `You run out of the front door, and in the fog, you can see 
                something that looks like a lantern. It must be a lantern as 
                it's bobbing left and right and moving in a direction you are 
                not familiar with. It seems to be heading for that old house 
                that was scheduled for demolishing, but it's still standing. 
                The city council could do a better job of maintaining the 
                town - you mumble to yourself.`,
                para_two: `You decide to follow it as it's 
                the only thing that can give you any clues. It's bloody cold 
                outside and the fog isn't helping, so you take another coat 
                from the rack in the pub. The others won't be using it. 
                Probably.
                As you rush to catch up with the lantern, you yell to try and 
                slow down whoever is holding it and eventually you get to the
                old house. You realise it's a bit dangerous to go in and 
                decide to look around. `,
                para_last: `The house isn't stable and your 
                imagination is kicking into overdrive: vampires, werewolves, 
                monsters... Naaah! This isn't a fairy-tale. Is it? After going 
                behind the house you see a short...creature, coming out of 
                the house. You get the chills down your spine, as if the fog 
                and the cold aren't enough. You quickly hide and watch it as 
                it's holding the lantern and going to...
                `,
            },
            next_choices: ["church", "hospital", "don't follow"]
        }
    },
    {
        users_choice: "back door",
        options: {
            intro_audio: "",
            story_image: "",
            story_text: {
                para_one: `YOU CHOSE THE BACK DOOR!  WHY???`,
                para_two: `My mind is blank`,
                para_last: `
                I can't think of anything to type
                `,
            },
            next_choices: ["one", "two", "three"]
        }
    },
    {
        users_choice: "bar area",
        options: {
            intro_audio: "",
            story_image: "",
            story_text: {
                para_one: `FOOL!  Death will surely come....`,
                para_two: `You should have picked the front door!`,
                para_last: `
                Defintely should not have come this way!
                `,
            },
            next_choices: ["one", "two", "three"]
        }
    }
]