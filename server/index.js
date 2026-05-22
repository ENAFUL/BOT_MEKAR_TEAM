// server/index.js - কমেন্ট হ্যান্ডেলার আপডেট
app.post('/api/videos/:id/comment', async (req, res) => {
    const { id } = req.params;
    const { text, user } = req.body;
    
    // ১. ইউজারের কমেন্ট
    const userComment = { text, user, date: new Date() };
    
    // ২. বট রিপ্লাই
    const botReply = {
        user: "System Bot",
        text: `ধন্যবাদ ${user}! এই বিষয়ে আরও সাহায্যের জন্য আমাদের সাথে টেলিগ্রামে যোগাযোগ করুন: @CYBER_BOSS_ENAFUL`,
        isBot: true // এটি ফ্রন্ট-এন্ডে স্টাইল করার জন্য দরকারি
    };

    const video = await Video.findById(id);
    video.comments.push(userComment, botReply); // কমেন্ট ও রিপ্লাই একসাথে পুশ
    await video.save();
    
    res.json(video);
});
