const crypto = require("crypto");

// Validate user
exports.validateUser = (req, res, next) => {
    try {
        if (req.headers["authorization"].includes("Bearer")) {
            const token = req.headers["authorization"].split("Bearer ")[1];

            console.log(token);
            next();
            // // Data received, perform processing
            // const signature = `sha256=${crypto
            //     .createHmac('sha256', secret)
            //     .update(JSON.stringify(req.body))
            //     .digest('hex')}`;

            // const isAllowed = req.headers['x-hub-signature-256'] === signature;
            // const body = req.body;
            
            // const isBranch = body?.ref === `refs/heads/${pj_conf["deploy_branch"]}`;

            // if (isAllowed && isBranch) {
            //     next();
            // } else {
            //     if (!isAllowed || !isBranch) {
            //         !isBranch ? 
            //             console.log("❌ Branch not prod") && res.status(417).send("❌ Branch not prod") : 
            //             console.log("❌ Secret verification failed") && res.status(401).send("❌ Secret verification failed");
            //     } 
            // }
        } else {
            next();
        }
    } catch (err) {
        
    }
}