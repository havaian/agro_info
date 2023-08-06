/**
 * @swagger
 * tags:
 *   name: Sample
 *   description: Sample API
 */

/**
 * @swagger
 * /sample:
 *   get:
 *     summary: Get sample data
 *     tags: [Sample]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Successful response
 */

app.get('/organisation/:id', (req, res) => {
    require("./organisation/controller").getOneUser(req, res);
});