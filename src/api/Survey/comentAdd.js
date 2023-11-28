const survey = require('../../models/survey')

const commentAdd = async (req, res) => {
    const { _id, comment } = req.body;
    console.log(req.body);
    try { 
            const result = await survey.findOneAndUpdate(
            { _id },
            {
                $push: { comment: comment },
            },
            { new: true } // Return the modified document
        );
        console.log("Updated result", result);
        res.send(result);
    } catch (error) {
        console.error("Error updating survey:", error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = commentAdd;
