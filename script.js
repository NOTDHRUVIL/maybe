document.addEventListener('DOMContentLoaded', () => {

    // --- Wish Data (Parsed and Ready) ---
    // IMPORTANT: Paste the raw wishes text block here for the script to parse
    const rawWishesText = `
Jian Wei: Happy birthday Maybelle!!! I’m so glad I met you as Melodie and I really gotta thank you and Liam for being the backbone of Act 2😭. I hope you had a great one and stay amazing!!
Giulia and Peter: Hi Maybelle, happy birthday 🎁 you’re the first person that I met in the UK. I am so grateful it was you. Since the beginning, we exchanged numbers and started hanging out together with everyone. From that day, I’ve never felt lonely again. Thank you for your kindness and for always opening the doors of your accommodation to us. I’m sorry I couldn’t make it to the UK this year as promised, but I’m too busy to come at the moment. Maybe we could meet in Italy or somewhere else. Love you
Oliver: To Maybelle, I hope you have an incredible birthday with all of your friends in Cardiff, so sorry I can’t be there! Best wishes from Oliver
Monica: Happy 22nd! Hope your day is full of good times, even better memories, and all the fun you can fit in ❤
Adriana: happy birthday maybellio!!!  I hope your day is as amazing, funny, and unforgettable as you are. I love you ❤️❤️
Farhana: Happy 22nd Maybelle! I’m so glad to have met you and to call such radiant and inspiring person my friend. You’re a ray of sunshine and I hope you receive all the love you’ve put out to the world. Hope you have a blessed birthday, as blessed as we are to have you in our lives ❤ xx
Fareen: Happy Birthday my favourite actress!! Hope you stay gorgeous and beautiful and talented and hardworking as you always are!! Lets have more dates together pookie wookie ❤
Wan: Wishing you the happiest birthday, Maybelle! I hope you have an amazing year ahead that’s just as bright and fun as you are 🙂
Anuj: Dear Maybelle, Happiest birthday 🙂 I’m really upset that I can’t be there to celebrate with you this year. Life has changed so much since we became friends in first year - friends, situations, all of it, but throughout it all, you have stayed the same. I genuinely appreciate that so much. Happy birthday again, and stay the same  ❤
Brian: Happy birthday maybelle. I wish you the best in everything. Love you to the moon and back
Moose: To Maybelle, Happy birthday! Have a great day. Thank you for turning a blind eye to my shenanigans with your boyfriend.
Nic: Hey Maybelle, Happy Birthday!! Have an amazing day with the incredible friends you have!!
Souvith: Happy birthday maybelle hope you have the best day ever, best wishes!
Lorraine: happy birthday maybelle!! i’m so glad we bonded over mnight you’re one of the kindest people i know ❤ i wish you the very best in everything you do and keep being you!!💗 Xoxo
Scarlett: hi maybelle! happy birthday lovee ❤️ ur one of the most genuine n sweetest people that ive met here hehe to more deep calls together HAHAH love u
Ludovico: Happy birthday, Maybelle! Altri cento!
Erina: Dear Maybelle, Happy Birthday and hope you will have a wonderful year ahead with lots of happiness and joy!
Mei Qie: hi maybelle, happy birthday! i genuinely think i would have died without u.. thank u for being there when i was at the lowest point of my life. i remember when u helped me throw out his stuff from the fridge, it may not seem like a lot but it meant the world when u were helping me with it. and seeing u eat hollywood pizza was the highlight of that day. i truly think that you bring joy and happiness to everyone around you, like a beam of sunshine! im wishing you all the happiness in this world, and have the best birthday ever! remember YOU ARE A STAR! watashi wa sta
Ashley: happy birthday maybelle!! so proud of everything you’ve achieved so far < 3 thank you for always being so positive (it really is contagious) and always being there to lend an ear. i’m so grateful to be able to call you my friend. love you 🥰
Rhea: Happy birthday, Maybelle!! I hope you have a great year! Thank you for being a ball of sunshine, I love your energy and I'm vv grateful for the positivity you bring to our lives. I hope you have a fabulous time today, Happy birthday again💕💕
Radzin: Happy Birthday! From quick changes to curtain calls, sharing the stage with you was such a blast. Hope your day is drama-free (unless it’s the fun kind) and full of celebration!
Kai: Happy birthday Maybelle. I haven't known you long but we've had some great memories, your accommodation was like a second home to me this year haha! Hope you have an amazing day, you deserve it! All love from Kai x
Chloe: happy birthday to our gabriella montez i hope you have a wonderful day!! we love you superstar xoxo
Jesse: Happy Birthday, Maybelle!! Wishing you the happiest birthday filled with laughter, love, and questionable life choices that make for great stories later! Miss you tons 🥰
Aigli: Maybelle-May your birthday be as fantastic as you are!
Kinan: Heyy Mayyy!! Happy birthday!!! I hope at this age you will get prettier, smarter, richer, and drowning in jellycats!! I also hope that all your dreams come true and please never stop posting about Mark:) -Fellow hyperthyroid girlies
Mohamed: HAPPY BIRTHDAY MAYBELLEEE ! 🎂🎉🎉
Su-yin: Happy birthday Maybelle!!!! You are truly a blessing to everyone around you, your kindness and thoughtfulness is on a crazy level!!! Thank you for being a part of our lives, wishing you only the best! ❤️
Deri: Happy birthday Maybelle my love!! I hope you have a blessed day and enjoy your birthday!🌷🥳 I’ve felt so blessed to have been able to spend my final year with you on our food adventures, playing games and dancing; you’ve been such a ray of light ☀️ I missed you so so so much last year but I’m so happy to have made so many more memories with you! I hope you have an awesome day and I hope this year is filled with happiness, success and joy. Love you loads!! 🤍🤍
Jan: Happy Birthday Maybelle!
Enrico: Hey Maybelle, happy birthday from italy to the prettiest girl ❤️❤️❤️love you!
Jason: Hi Maybelle, HAPPY BIRTHDAY, hope you have the greatest day, you deserve it! Thank you for all the cheerful memories during FOD and practicing, its always so fun hanging out with you! Lets hangout soon! 🫶
Nick: Happy 22nd Maybelle! Thank you again for commiting yourself to the role of Melodie. I am so proud of how far you all have become to present yourselves on stage. Hope you're not afraid to chase your dreams, and become the person you've always wanted to be.
Sean: Happy Birthday, Maybelle! Wishing you all the joy, laughter, and happiness today and always. So glad about our close friend group back in uni—miss those days!
Adam: Maybelle I’m so sad I’m not there for the party, sending love from Japan! 🇯🇵 FOMO be kicking in real hard rn. I’ll never forget when I saw you again with Jan and we both had that  “WAIT I SWEAR I RECOGNIZE  YOU” de ja vu moment. I literally thought u just disappeared all this time just for you to reappear 🤯. I was blown away by your performance as Melodie, you’re literally the actor I aspire to be 🥹 Cheers to the countless kpop nights we have had and to many more 🍷 Love from Pikachu 🧡
Zhiwei: anyone fortunate enough to cross paths with you knows just how special you are, happy birthday love! 💌 May this year shower you with the same warmth and kindness you’re giving to everyone else🌷 Love
Munch: Hey Maybs, Happy Birthday young one it's been awhile but i hope you're enjoying yourself back in cardiff. The road ahead is long and bumpy with school, family and relationship. But enjoy it all and i hope everything will workout for you in the coming years.See you soon when you come back for the summer if you do later in august .
Liam: Happy Birthday Mel! -from Miq All jokes aside, happy bday gang. Thanks for making MNight a blast to work together with. May have countless blessings as per usual. Chill out on the popmart collection and thanks for always having my back. Hope you liked the last IndoMie from the vending machine that me and Jian Wei got. As always, stay safe, continue to be yourself and keep boppin on with OG Maroon 5 songs.
Brittaney: Happy birthday to my cutest Maybelle xx thank you for being such a kind and loving soul. year 2 wouldn’t have been nearly as fun or survivable without you!! i hope your 22nd year brings you all the happiness and love you deserve and may god bless you in every step of your journey. cheers to many more moments with you! i love you smmm xx Love
Katrina: Happy Birthday bestie. If I could teleport, I’d crash your party and eat all your cake. Since I can’t, just know I’m sending you long-distance hugs and kisses. Love you and I can’t wait to see you this summer! xo Katrina (the one from KL just in case you forgot)
Sanay: hey happy birthday mayble, have a fun day today and remember cardiff bay is basically Bali if your deluded enough
Vinti: Happiest birthday Maybelle..hope you have the best day and year ahead thank you for being the wonderful person and friend that you are love you❤️
Lyla: Hey Maybelle, I used to think being kind and fun was something we had to work hard to achieve, but you seem to have been born with it. I guess a lot of people must feel as lucky as I do to have you in their lives. Happy birthday! I hope all the wonderful things you deserve will find their way to you in your new year — so get excited! Love from Lyla
Kana: Dear Maybelle, Happy Birthday!! Hope you have an amazing year :) Love you so much girll 💕 From Kanana
Dhruvil: Maybelle I don’t know what to say. It's already been three years since we first met and it seems like time is not being lenient to us hahaha. You are the most insightful, thoughtful, genuine, brainy, gritty, perfectly imperfect person that I could ever ask for a bestie. Thank you so much for being there for me and having me around all this time, in person and online. I could not say anything commensurate with the love you have given me and have shown me the extent of love I could have for a friend which I did not think was possible. However tough times may seem, I know you will always end up doing something extraordinary, and I have known you enough to have the proof to back that up. Keep taking care of yourself, and “I love you, you idiot!” Happy birthday
    `;

    // Function to parse the raw text into an array of { sender, message } objects
    function parseWishes(rawText) {
        const wishes = [];
        const lines = rawText.trim().split('\n');
        lines.forEach(line => {
            const parts = line.split(':');
            if (parts.length >= 2) {
                const sender = parts[0].trim();
                const message = parts.slice(1).join(':').trim(); // Join back in case of colons in message
                if (sender && message) {
                    wishes.push({ sender: sender, message: `"${message}"` }); // Add quotes around message
                }
            }
        });
        return wishes;
    }

    let wishesData = parseWishes(rawWishesText);

    // --- Fisher-Yates Shuffle Function ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
    }

    // --- Shuffle the Wishes ---
    shuffleArray(wishesData);

    // --- DOM Elements ---
    const cardDisplayArea = document.getElementById('card-display-area');
    const messageElement = cardDisplayArea.querySelector('.message');
    const senderElement = cardDisplayArea.querySelector('.sender');
    const prevButton = document.getElementById('prev-wish');
    const nextButton = document.getElementById('next-wish');
    const randomButton = document.getElementById('random-wish');
    const wishCounterElement = document.getElementById('wish-counter');
    const backgroundMusic = document.getElementById('background-music');
    const playPauseButton = document.getElementById('play-pause-btn');

    // --- State ---
    let currentWishIndex = -1; // Start at -1 so the first "next" or "random" goes to 0
    let isMusicPlaying = false;

    // --- Display Wish Function ---
    function displayWish(index) {
        if (index < 0 || index >= wishesData.length) {
            console.error("Invalid wish index:", index);
            return; // Safety check
        }

        const wish = wishesData[index];
        currentWishIndex = index;

        // Add fade-out class, wait for transition, update content, remove class
        cardDisplayArea.classList.add('fade-out');

        setTimeout(() => {
            messageElement.textContent = wish.message;
            senderElement.textContent = `- ${wish.sender}`;
            wishCounterElement.textContent = `Wish ${index + 1} / ${wishesData.length}`;
            cardDisplayArea.classList.remove('fade-out'); // Start fade-in
        }, 400); // Match transition duration in CSS
    }

     // --- Initial Display (Show the first shuffled wish) ---
     if (wishesData.length > 0) {
        displayWish(0); // Display the first wish after shuffling
     } else {
        messageElement.textContent = "No wishes found!";
        senderElement.textContent = "";
        wishCounterElement.textContent = `Wish 0 / 0`;
     }


    // --- Navigation Button Event Listeners ---
    nextButton.addEventListener('click', () => {
        let nextIndex = currentWishIndex + 1;
        if (nextIndex >= wishesData.length) {
            nextIndex = 0; // Wrap around to the first wish
        }
        displayWish(nextIndex);
        launchConfetti(0.7, 0.9); // Confetti from right
    });

    prevButton.addEventListener('click', () => {
        let prevIndex = currentWishIndex - 1;
        if (prevIndex < 0) {
            prevIndex = wishesData.length - 1; // Wrap around to the last wish
        }
        displayWish(prevIndex);
        launchConfetti(0.1, 0.3); // Confetti from left
    });

    randomButton.addEventListener('click', () => {
        let randomIndex;
        if (wishesData.length <= 1) {
            randomIndex = 0; // Handle case with 0 or 1 wish
        } else {
             // Ensure the new random index is different from the current one
            do {
                randomIndex = Math.floor(Math.random() * wishesData.length);
            } while (randomIndex === currentWishIndex);
        }
        displayWish(randomIndex);
        launchConfetti(); // Confetti from both sides
    });

    // --- Music Control ---
    playPauseButton.addEventListener('click', toggleMusic);

    function toggleMusic() {
        if (isMusicPlaying) {
            backgroundMusic.pause();
            playPauseButton.textContent = '▶️ Play';
        } else {
            // Try to play, handle potential browser block
            backgroundMusic.play().then(() => {
                playPauseButton.textContent = '⏸️ Pause';
            }).catch(error => {
                console.warn("Audio autoplay might be blocked by the browser. User interaction needed.", error);
                // Optionally inform the user they need to click play
                playPauseButton.textContent = '▶️ Play';
                isMusicPlaying = false; // Ensure state is correct if play failed
                return; // Exit if play failed
            });
        }
        isMusicPlaying = !isMusicPlaying; // Toggle state *after* successful play/pause
    }

     // Update button text if music ends naturally (though it's looping)
     backgroundMusic.addEventListener('ended', () => {
        playPauseButton.textContent = '▶️ Play';
        isMusicPlaying = false;
     });

    // --- Simple Confetti Effect Function ---
    function launchConfetti(xMin = 0.1, xMax = 0.9) { // Allow specifying sides
        confetti({
            particleCount: 100,
            spread: 70,
            origin: {
                x: Math.random() * (xMax - xMin) + xMin, // Randomly between specified x range
                y: Math.random() - 0.2 // Launch from slightly above the button area
                }
        });
    }

    // Optional: Initial confetti burst on load
    setTimeout(() => launchConfetti(), 500);

});
