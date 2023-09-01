const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment');

// Display the list of appointments.
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.findAll();
    res.render('appointments', { appointments });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Display the create appointment form.
router.get('/create', (req, res) => {
  res.render('create');
});

// Create a new appointment.
router.post('/create', async (req, res) => {
  const { username, number, email } = req.body;
  try {
    await Appointment.create({ username, number, email });
    res.redirect('/appointments');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Display the edit form for a specific appointment.
router.get('/edit/:id', async (req, res) => {
  const appointmentId = req.params.id;

  try {
    const appointment = await Appointment.findByPk(appointmentId);

    if (!appointment) {
      return res.status(404).send('Appointment not found');
    }

    res.render('edit', { appointment });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Update an appointment in the database.
router.post('/edit/:id', async (req, res) => {
  const appointmentId = req.params.id;
  const { username, number, email } = req.body;

  try {
    const appointment = await Appointment.findByPk(appointmentId);

    if (!appointment) {
      return res.status(404).send('Appointment not found');
    }

    // Update the appointment in the database
    await appointment.update({ username, number, email });

    res.redirect('/appointments');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Display a confirmation page for deleting an appointment.
router.get('/delete/:id', async (req, res) => {
  const appointmentId = req.params.id;

  try {
    const appointment = await Appointment.findByPk(appointmentId);

    if (!appointment) {
      return res.status(404).send('Appointment not found');
    }

    res.render('delete', { appointment });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Delete an appointment from the database.
router.post('/delete/:id', async (req, res) => {
  const appointmentId = req.params.id;

  try {
    const appointment = await Appointment.findByPk(appointmentId);

    if (!appointment) {
      return res.status(404).send('Appointment not found');
    }

    // Delete the appointment from the database
    await appointment.destroy();

    res.redirect('/appointments');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
