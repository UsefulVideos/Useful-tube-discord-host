const prefix = process.env.PREFIX;
module.exports = {
    name: 'quack',
    description: 'Quack',
    guildOnly: false,
    execute(message, args) {
        message.channel.send("It seems that you love ducks, don't you?");
        message.channel.send("But have you ever heard of a human body part that looks similar to the beak of a duck, don't you?");
        message.channel.send("If you did, then please answer this question correctly:");
        message.channel.send("**What do natural c-curve nails and duck beaks have the most in common?**");
        message.channel.send("**A.** Their color. Their color is similar.");
        message.channel.send("**B.** Their thickness. It's sorta alike.");
        message.channel.send("**C.** Their shape. Duck beaks and c-curve nails resemble almost the same shape.");
        message.channel.send("**D.** Their glossiness. Their glossiness or shininess is much alike.");
        message.channel.send("**E.** Their material and texture. Their material is something solid that can be cut but doesn't hurt.");
        message.channel.send("**D.** Their fluids. They are both made of the same fluid that the animal body depends on.");
        message.channel.send(`To answer the question, please type in this form: \```${prefix}answer <letter>````);
        if (message.content.startsWith(prefix + "answer E")) {
         message.channel.send("Congrats! For getting the correct answer, **E**!");
       }
       else {
        message.channel.send("I am sorry, but the correct answer to the question is actually **D**!");
        message.channel.send("I guess you did not realise what nails and duck beaks have the most in common.");
       }
    },
};
