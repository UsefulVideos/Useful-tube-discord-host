const prefix = process.env.PREFIX;
const incorrectletter = 'A','B','C','D';
module.exports = {
    name: 'quack',
    description: 'Quack',
    guildOnly: false,
    execute(message, args) {
        message.channel.send("It seems that you love ducks, don't you?");
        message.channel.send("But have you ever heard of a human body part that looks similar to the beak of a duck, don't you?");
        message.channel.send("If you did, then please answer this question correctly:");
        message.channel.send("**What do natural c-curve nails and duck beaks have the most in common?**");
        message.channel.send("**A.** Their color. Their color is similar. \n**B.** Their thickness. It's sorta alike.\n**C.** Their shape. Duck beaks and c-curve nails resemble almost the same shape.\n**D.** Their glossiness. Their glossiness or shininess is much alike.\n**E.** Their material and texture. Their material is something solid that can be cut but doesn't hurt.\n**E.** Their fluids. They are both made of the same fluid that the animal body depends on.");
        message.channel.send(`To answer the question, please type in this form: \n**${prefix}answer <letter>** `);
        if (message.content.startsWith(prefix + "answer E")) {
         message.channel.send("Congrats! For getting the correct answer, **E**!");
         }
       else if (message.content.startsWith(prefix + "answer" + incorrectletter)) {
        message.channel.send("Incorrect, the correct answer to the question is actually **E**!");
        message.channel.send("I guess you did not realise what nails and duck beaks have the most in common.");
       }
    },
};
