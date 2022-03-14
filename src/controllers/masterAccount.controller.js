const router = express.Router();

router.get('/masterAccount', async (req, res) => {
    try {
        const masterAccount = await Master_Account.find().lean().exec();
        return res.status(200).send(masterAccount);
    }
    catch(err) {
        return res.status(500).send({message: err.message});
    }
});