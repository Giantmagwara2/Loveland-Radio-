<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Validate form inputs
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Email setup
        $to = "support@lovelandradio.com"; // Replace with your email address
        $subject = "New Message from $name";
        $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
        $headers = "From: $email";

        // Send the email
        if (mail($to, $subject, $body, $headers)) {
            echo "Thank you, $name! Your message has been sent.";
        } else {
            echo "Sorry, there was an issue sending your message. Please try again later.";
        }
    } else {
        echo "All fields are required. Please fill out the form completely.";
    }
} else {
    echo "Invalid request method.";
}
?>