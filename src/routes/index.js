const {Router} = require("express");
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const router = Router();

// rutas de task
/**
 *@swagger 
 * components:
 *  schemas:
 *    Task:
 *      type: object
 *      properties:
 *        title: 
 *          type: string
 *          description: titulo de la tarea
 *        description:
 *          type: string
 *          description: descripcion de la tarea
 *        iduser: 
 *          type: string
 *          description: id del usuario
 *        isCompleted:    
 *          type: boolean
 *          description: true tarea completa false tarea incompleta
 *      required:
 *      - title
 *      - description
 *      - iduser
 *      - isCompleted
 *      example:
 *         title: expensas
 *         description: pagar $1000 
 *         isCompleted: false
 */


/**
 * @swagger
 * /task:
 *  get: 
 *      summary: retorna todas las tareas del usuario. 
 *      tags: [Task]
 *      parameters:
 *       -  in: query
 *          name: order
 *          type: string
 *          description: Indica si los resultados se ordenan por el titulo de forma Ascendente ASC o descendente DESC
 *       -  in: query
 *          name: page
 *          type: integer
 *          description: Indica el nro de pagina que devuelve.
 *       -  in: header
 *          name: authtoken
 *          type: string
 *          description: Token del usuario.  
  *      responses:
 *        200:
 *          description: todas las tareas del usuario con parametros para ordenamiento y paginacion
 *          content:
 *            application/json:
 *              schema:
 *                properties:
 *                  error:
 *                type: array
 *                items: 
 *                  $ref: '#/components/schemas/Task'        
 */     
router.get("/task/", middlewares.tokenValidation, controllers.getAllTasks);
/**
 * @swagger
 * /task:
 *  post: 
 *      summary: crea una nueva tarea. 
 *      tags: [Task]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Task'     
 *      parameters:
 *       -  in: header
 *          name: authtoken
 *          type: string
 *          description: Token del usuario.   
  *       -  in: path
 *          name: id
 *          type: string   
 *          description: id del usuario         
 *      responses:
 *        200:
 *          description: tarea creada    
 */   


router.post("/task/",middlewares.tokenValidation, middlewares.taskValidation, controllers.createTask);

/**
 * @swagger
 * /task/{id}:
 *  put: 
 *      summary: actualiza una tarea. 
 *      tags: [Task]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Task'     
 *      parameters:
 *       -  in: header
 *          name: authtoken
 *          type: string
 *          description: Token del usuario.        
 *      responses:
 *        200:
 *          description: tarea actualizada     
 */   
router.put("/task/:id",middlewares.tokenValidation,middlewares.taskValidation, controllers.updateTask);
/**
 * @swagger
 * /task/{id}:
 *  delete: 
 *      summary: elimina una tarea. 
 *      tags: [Task]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Task'     
 *      parameters:
 *       -  in: header
 *          name: authtoken
 *          type: string
 *          description: Token del usuario.        
 *      responses:
 *        200:
 *          description: tarea eliminada     
 */ 
router.delete("/task/:id",middlewares.tokenValidation, controllers.deleteTask);

//rutas de user

/**
 *@swagger 
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        user: 
 *          type: string
 *          description: usuario
 *        password:
 *          type: string
 *          description: contreña
 *      required:
 *      - user
 *      - password
 *      example:
 *         user: nico
 *         password: nico123
 *         
 */

/**
 * @swagger
 * /user/register:
 *  post: 
 *      summary: crea una nueva usuario. 
 *      tags: [User]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/User'          
 *      responses:
 *        200:
 *          description: usuario registrado    
 */   

router.post("/user/register", middlewares.userValidation, controllers.registerUser);
/**
 * @swagger
 * /user/login:
 *  post: 
 *      summary: iniciar sesion. 
 *      tags: [User]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/User'          
 *      responses:
 *        200:
 *          description: usuario logueado    
 */   

router.post("/user/login", controllers.loginUser);





module.exports = router;
