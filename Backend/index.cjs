const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const transformFormData = require('./utils/transformFormData.cjs');

const RTAEntry = require('./models/alertFormModel.cjs');
const VSBEntry = require('./models/visaFormModel.cjs');
const delayedAlert = require('./models/delayed-alertModel.cjs');

mongoose.connect("mongodb://0.0.0.0:27017/GetYourSlots");

// Serve static files from the React app's build folder
app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const swaggerjsdoc = require('swagger-jsdoc');
const swaggerui = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Get Your Slots API',
            description: 'Get Your Slots API Information',
        },
        servers: [
            {
                url: "/"
            }
        ]
    },
    apis: ['index.cjs']
};
const swaggerDocs = swaggerjsdoc(swaggerOptions);
app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerDocs));
/**
 * @swagger
 * components:
 *   schemas:
 *     RealTimeAlert:
 *       type: object
 *       required:
 *         - fname
 *         - lname
 *         - pnum
 *         - email
 *         - visatype
 *         - subplan
 *       properties:
 *         fname:
 *           type: string
 *           description: First name of the user
 *         lname:
 *           type: string
 *           description: Last name of the user
 *         pnum:
 *           type: string
 *           description: Phone number of the user
 *         email:
 *           type: string
 *           description: Email address of the user
 *         visatype:
 *           type: string
 *           description: Type of visa user is applying for
 *         subplan:
 *           type: string
 *           description: Subscription plan the user has chosen
 *     VisaSlotBooking:
 *       type: object
 *       required:
 *         - fname
 *         - lname
 *         - pnum
 *         - email
 *         - visatype
 *         - subplan
 *         - appointmenttype
 *       properties:
 *         fname:
 *           type: string
 *           description: First name of the user
 *         lname:
 *           type: string
 *           description: Last name of the user
 *         pnum:
 *           type: string
 *           description: Phone number of the user
 *         email:
 *           type: string
 *           description: Email address of the user
 *         visatype:
 *           type: string
 *           description: Type of visa user is applying for
 *         subplan:
 *           type: string
 *           description: Subscription plan the user has chosen
 *         appointmenttype:
 *           type: string
 *           description: Type of appointment (e.g., interview, biometrics)
 *     DelayedAlertUpdate:
 *       type: object
 *       properties:
 *         delayedAlert:
 *           type: string
 *           description: The updated message for delayed alerts
 */

/**
 * @swagger
 * /api/v1/form/real-time-alerts:
 *   post:
 *     summary: Register a user for real-time alerts
 *     tags: [RealTimeAlert]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RealTimeAlert'
 *     responses:
 *       201:
 *         description: User registered successfully for Real Time Alerts
 *       500:
 *         description: Internal server error
 */
app.post('/api/v1/form/real-time-alerts', async (req, res) => {
  const transformedData = transformFormData(req.body);
  const fname = transformedData.fname;
  const lname = transformedData.lname;
  const pnum = transformedData.pnum;
  const email = transformedData.email;
  const visatype = transformedData.visatype;
  const subplan = transformedData.subplan;
  
  const newUser = new RTAEntry({
    fname: fname,
    lname: lname,
    pnum: pnum,
    email: email,
    visatype: visatype,
    subplan: subplan
  })

  await newUser.save()
    .then(() => res.status(201).json({ message: 'User registered successfully for Real Time Alerts' }))
    .catch(error => res.status(500).json({ message: 'Internal server error' }));
})

/**
 * @swagger
 * /api/v1/form/visa-slot-booking:
 *   post:
 *     summary: Book a visa slot for a user
 *     tags: [VisaSlotBooking]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VisaSlotBooking'
 *     responses:
 *       201:
 *         description: Visa slot booked successfully
 *       500:
 *         description: Internal server error
 */
app.post('/api/v1/form/visa-slot-booking', async (req, res) => {
  const transformedData = transformFormData(req.body);
  const fname = transformedData.fname;
  const lname = transformedData.lname;
  const pnum = transformedData.pnum;
  const email = transformedData.email;
  const visatype = transformedData.visatype;
  const subplan = transformedData.subplan;
  const appointmenttype = transformedData.appointmenttype;
  
  const newUser = new VSBEntry({
    fname: fname,
    lname: lname,
    pnum: pnum,
    email: email,
    visatype: visatype,
    subplan: subplan,
    appointmenttype: appointmenttype
  })

  await newUser.save()
    .then(() => res.status(201).json({ message: 'Visa slot booked successfully' }))
    .catch(error => res.status(500).json({ message: 'Internal server error' }));
})

/**
 * @swagger
 * /api/v1/delayed-alerts:
 *   put:
 *     summary: Update the delayed alert message
 *     tags: [DelayedAlertUpdate]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DelayedAlertUpdate'
 *     responses:
 *       201:
 *         description: Delayed alert updated successfully
 *       500:
 *         description: Internal server error
 */
app.put('/api/v1/delayed-alerts', async (req, res) => {
  const update = req.body.delayedAlert;
  
  const updateAlert = await delayedAlert.findById('66e01361c0a4e442a5b2c341');
  updateAlert.delayedAlert = update;

  await updateAlert.save()
    .then(() => res.status(201).json({ message: 'Delayed alert updated successfully' }))
    .catch(error => res.status(500).json({ message: 'Internal server error' }));
});


/**
 * @swagger
 * /api/v1/delayed-alerts:
 *   get:
 *     summary: Get the current delayed alert message
 *     tags: [DelayedAlertUpdate]
 *     responses:
 *       200:
 *         description: Returns the current delayed alert message
 *       500:
 *         description: Internal server error
 */
app.get('/api/v1/delayed-alerts', async (req, res) => {
  const getUpdate = await delayedAlert.findById('66e01361c0a4e442a5b2c341');
  res.status(201).json({Update: getUpdate.delayedAlert});
});

// Handle any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});