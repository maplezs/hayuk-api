const router = require('express').Router()
const verifytoken = require('../middlewares/verifytoken')
const validate = require('../middlewares/validation')
const schema = require('../utils/authvalidation')
const { getUser, getUserId, updateUser, deleteUser } = require('../controllers/user')

router.route('/user')
  .get(verifytoken, getUser)
// by user id
router.route('/user/:id')
  .get(verifytoken, getUserId)
  .patch(verifytoken, validate(schema.updateUser), updateUser)
  .delete(verifytoken, deleteUser)

/**
   * @swagger
   * /user:
   *  get:
   *    security:
   *      - AuthToken: []
   *    tags:
   *      - Manajemen Pengguna
   *    summary: Daftar akun pengguna
   *    responses:
   *      '200':
   *        description: Success
   *        content:
   *          application/json:
   *            example:
   *              {
   *                "status": "success",
   *                "message": "Daftar user berhasil didapatkan",
   *                "data": {
   *                  "id": "qyO9_BgMqNpb45Y3g1S-o",
   *                  "name": "Ahmad Ibrahim",
   *                  "email": "a.ibrahim@example.com",
   *                  "createdAt": "2023-03-17T11:04:09.588Z",
   *                  "updatedAt": "2023-03-17T11:04:09.588Z"
   *                }
   *              }
   *      '400':
   *        description: Bad Request
   */

/**
 * @swagger
 * /user/{id}:
 *    get:
 *      security:
 *        - AuthToken: []
 *      tags:
 *        - Manajemen Pengguna
 *      summary: Melihat detail pengguna berdasarkan ID
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *          description: ID dari user
 *      responses:
 *        '200':
 *          description: Success
 *          content:
 *            application/json:
 *              example:
 *                {
 *                  "status": "success",
 *                  "message": "Data pengguna berhasil didapatkan",
 *                  "data": {
 *                    "id": "qyO9_BgMqNpb45Y3g1S-o",
 *                    "name": "Ahmad Ibrahim",
 *                    "email": "a.ibrahim@example.com",
 *                    "createdAt": "2023-03-17T11:04:09.588Z",
 *                    "updatedAt": 2023-03-17T11:04:09.588Z"
 *                  }
 *                }
 *        '404':
 *          description: User not found
 */

/**
 * @swagger
 * /user/{id}:
 *   patch:
 *     security:
 *       - AuthToken: []
 *     tags:
 *       - Manajemen Pengguna
 *     summary: Memperbarui detail pengguna berdasarkan ID
 *     description: Bisa memperbaharui salah satu data saja atau ketiga data sekaligus, data akan tetap divalidasi ada minimum panjang nama, email dan password, serta pengecekan apakah email sudah digunakan user lain atau belum
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/register'
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID dari pengguna
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             example:
 *               {
 *                 "status": "success",
 *                 "message": "Data pengguna berhasil diupdate",
 *               }
 *       '404':
 *         description: User not found
 */

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     security:
 *       - AuthToken: []
 *     tags:
 *       - Manajemen Pengguna
 *     summary: Menghapus User berdasarkan ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID dari user
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             example:
 *               {
 *                 "success": "success",
 *                 "message": "User berhasil dihapus"
 *               }
 *       '404':
 *         description: User not found
 */

module.exports = router
