import express from 'express'
	import userCtrl from '../controllers/user.controller.js' 
	const router = express.Router()
	router.route('/survey/users') 
	.get(userCtrl.list)
	.post(userCtrl.create)
	router.route('/survey/users/:userId') 
	.get(userCtrl.read)
	.put(userCtrl.update) 
	.delete(userCtrl.remove)
	router.param('userId', userCtrl.userByID) 
    router.route('/survey/users').post(userCtrl.create)
    router.route('/survey/users').get(userCtrl.list)
    router.param('userId', userCtrl.userByID)
    router.route('/survey/users/:userId').get(userCtrl.read)
    router.route('/survey/users/:userId').put(userCtrl.update)
    router.route('/survey/users/:userId').delete(userCtrl.remove)
	router.route('/survey/users').delete(userCtrl.removeAll)


	export default router
