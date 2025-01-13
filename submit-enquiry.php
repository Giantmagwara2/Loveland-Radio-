<?php
// Start by checking if the form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize and collect the form inputs
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $package = htmlspecialchars(trim($_POST['package']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate the required fields
    if (empty($name) || empty($email) || empty($package) || empty($message)) {
        echo "All fields are required. Please go back and fill out the form.";
        exit;
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format. Please go back and correct your email.";
        exit;
    }

    // Prepare the email