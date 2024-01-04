const btn = document.querySelector('#btn');
const par = document.querySelector('#par');

const quotes = [
    `"It's fine to celebrate success, but it is more important to heed the lessons of failure." - Bill Gates`,
    `"You miss 100% of the shots you don't take." - Wayne Gretzky`,
    `"Success is not how high you have climbed, but how you make a positive difference to the world." - Roy T. Bennett`,
    `"Believe you can and you're halfway there." - Theodore Roosevelt`,
    `"I have not failed. I've just found 10,000 ways that won't work." - Thomas Edison`,
    `"Success seems to be largely a matter of hanging on after others have let go." - William Feather`,
    `“Success awaits those who steadfastly commit to any requisite sacrifice” ― Ken Poirot`,
    `"You can't build a reputation on what you are going to do." - Henry Ford`,
    `“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.” – Steve Jobs`,
    `"In any moment of decision, the best thing you can do is the right thing, the next best thing is the wrong thing, and the worst thing you can do is nothing." - Theodore Roosevelt`,
    `"Opportunities don't happen. You create them." - Chris Grosser`,
    `“The people who are crazy enough to think they can change the world are the ones who do.” – Steve Jobs`,
    `“Ambition is the path to success. Persistence is the vehicle you arrive in.” – Bill Bradley`,
    `“You must be very patient, very persistent. The world isn’t going to shower gold coins on you just because you have a good idea. You’re going to have to work like crazy to bring that idea to the attention of people.” - Herb Kelleher`,
    `"A true leader has the confidence to stand alone, the courage to make tough decisions, and the compassion to listen to the needs of others." - Douglas MacArthur`,
    `"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful." - Albert Schweitzer`,
    `“Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.” ― Marie Curie`
]

btn.addEventListener('click', () => {
    let randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuotes;
})