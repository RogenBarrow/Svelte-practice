<script>
    import { messageDelivered } from '$lib/message'
    import '@picocss/pico'
</script>

<html lang="en">
  <body>
    <div class="hero">
    <nav class="container=fluid">
      <ul>
        <li><a href="/"><strong>Arise Church</strong></a></li>
      </ul>
      <ul>
        <li><a href="/form">Attandence Submission</a></li>
        <li><a href="/displaydata">Report</a></li>
      </ul>
    </nav>
  </div>
        <main class="container">
            <form method="post">
                
                <h1>Arise Attendance Submission</h1>
                <!-- Grid -->
                <div class="grid">
              
                  <!-- Markup example 1: input is inside label -->
                  <label for="date">Date
                    <input type="date" id="date" name="date">
                  </label>
              
                  <label for="number">
                    Attandence in Church
                    <input type="text" id="number" name="number" placeholder="Amount of people" required>
                  </label>

                  <label for="numberkids">
                    Arise kids
                    <input type="text" id="number" name="numberkids" placeholder="Arise kids" required>
                  </label>

                  <label for="numberleader">
                    Arise kids leaders
                    <input type="text" id="number" name="numberkidsleaders" placeholder="Arise kids leaders" required>
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

