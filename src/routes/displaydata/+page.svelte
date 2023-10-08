<script>
    import { messageDelivered } from '$lib/message'
    import '@picocss/pico'
</script>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./src/custom.css" />
    <title>Hello, world!</title>
  </head>
  <body>
    <div class="hero">
    <nav class="container=fluid">
      <ul>
        <li><a href="/"><strong>Brand</strong></a></li>
      </ul>
      <ul>
        <li><a href="/form">Attandence Submission</a></li>
        <li><a href="/form">Form Submission</a></li>
      </ul>
    </nav>
  </div>
        <main class="container">
            <form method="post">
                
                <h1>Attendance Submission</h1>
                <!-- Grid -->
                <div class="grid">
              
                  <!-- Markup example 1: input is inside label -->
                  <label for="date">Date
                    <input type="date" id="date" name="date">
                  </label>
              
                  <label for="number">
                    Number of people
                    <input type="text" id="number" name="number" placeholder="Amount of people" required>
                  </label>
              
                </div>
              
                <!-- Markup example 2: input is after label -->
                <label for="name">Name of submitter
                <input type="name" id="name" name="name" placeholder="name" required>
              </label>

                <fieldset>
                  <label for="terms">
                    <input type="checkbox" id="terms" name="accurate" value="true" required>
                    Is it accurate?
                  </label>
                </fieldset>
              
                <!-- Button -->
                <button type="submit" id="submitform" on:click={messageDelivered} >Submit</button>
              
              </form>
        </main>
  </body>
</html>

