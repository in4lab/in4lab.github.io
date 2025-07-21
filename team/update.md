---
title: update
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Update Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
        }
        h1 {
            color: #2c3e50;
            text-align: center;
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input[type="text"],
        input[type="email"],
        textarea {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }
        textarea {
            height: 150px;
        }
        button {
            background-color: #3498db;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background-color: #2980b9;
        }
        .form-section {
            margin-bottom: 30px;
            padding: 15px;
            background-color: #f9f9f9;
            border-radius: 5px;
        }
        .form-section h2 {
            margin-top: 0;
            color: #2c3e50;
        }
        #preview {
            margin-top: 30px;
            padding: 15px;
            background-color: #f0f0f0;
            border-radius: 5px;
            white-space: pre-wrap;
            font-family: monospace;
        }
    </style>
</head>
<body>
    <h1>Profile Update Form</h1>
    
    <form id="profileForm">
        <div class="form-section">
            <h2>Basic Information</h2>
            <div class="form-group">
                <label for="name">Full Name:</label>
                <input type="text" id="name" name="name" value="Hyunseung Choo" required>
            </div>
            
            <div class="form-group">
                <label for="image">Image Path:</label>
                <input type="text" id="image" name="image" value="images/hyunseung-cho.jpeg">
            </div>
            
            <div class="form-group">
                <label for="role">Role:</label>
                <input type="text" id="role" name="role" value="pro">
            </div>
            
            <div class="form-group">
                <label for="group">Group:</label>
                <input type="text" id="group" name="group" value="2">
            </div>
        </div>
        
        <div class="form-section">
            <h2>Contact Information</h2>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" value="choo@skku.edu" required>
            </div>
            
            <div class="form-group">
                <label for="homepage">Homepage:</label>
                <input type="text" id="homepage" name="homepage" value="http://monet.skku.edu/main/">
            </div>
            
            <div class="form-group">
                <label for="orcid">ORCID:</label>
                <input type="text" id="orcid" name="orcid" value="0000-0002-6485-3155">
            </div>
            
            <div class="form-group">
                <label for="google-scholar">Google Scholar ID:</label>
                <input type="text" id="google-scholar" name="google-scholar" value="ITYIxrUAAAAJ">
            </div>
        </div>
        
        <div class="form-section">
            <h2>Biography</h2>
            <div class="form-group">
                <label for="bio">Professional Bio:</label>
                <textarea id="bio" name="bio" required>Hyunseung Choo (Member, IEEE) is a Professor with the College of Computing and Informatics, Sungkyunkwan University (SKKU), South Korea. He is also the National Project Director of the ICT Creative Consilience Program (2020–2029), supported by the Ministry of Science and ICT (MIST); and the Operation Chair of the SDN/NFV Industrial Forum with Korea Association of Network Industries. He has held several notable positions, including the Director of the Intelligent HCI Convergence Research Center, Ministry of Knowledge Economy, from 2005 to 2013; the Priority Research Centers Program, Ministry of Education, Science, and Technology, from 2010 to 2019; and the Grand ICT Research Center, Ministry of Science, ICT and Future Planning, from 2015 to 2022. He also served as a Technical Adviser for Next-Generation Interaction with the Research and Development Center, Samsung Electronics. His research interests include network softwarization, intelligent mobile and edge computing, and medical image processing. He has published over 350 papers in international journals and major conferences, and holds 30 U.S. patents and 243 Korean patents in these fields.,He is a member of ACM and IEICE. His research achievements have been recognized among the Top 100 National Research and Development Excellence Achievements by the Ministry of Education, in 2005 and 2010, and by MIST, in 2019. He has received several awards, including the Excellence Awards and Commendations from MIST, and the Bronze Best Paper Award from Samsung, in 2023. He is actively involved in several academic societies, serving as the Director for KIISE, KSII, KPIS, and HCI Korea. He served as the Editor-in-Chief for Journal of Internet Computing and Services; and an Editor for ACM Transactions on Internet Technology, Journal of Communications and Networks, and The Journal of Supercomputing. Since 2010, he has been the Founding Editor of KSII Transactions on Internet and Information Systems.</textarea>
            </div>
        </div>
        
        <div class="form-group">
            <button type="button" onclick="generateMarkdown()">Generate Markdown</button>
            <button type="button" onclick="sendEmail()">Send via Email</button>
        </div>
    </form>
    
    <div id="preview"></div>
    
    <script>
        function generateMarkdown() {
            const name = document.getElementById('name').value;
            const image = document.getElementById('image').value;
            const role = document.getElementById('role').value;
            const group = document.getElementById('group').value;
            const email = document.getElementById('email').value;
            const homepage = document.getElementById('homepage').value;
            const orcid = document.getElementById('orcid').value;
            const googleScholar = document.getElementById('google-scholar').value;
            const bio = document.getElementById('bio').value;
            
            let markdown = `---
name: ${name}
image: ${image}
role: ${role}
group: ${group}
aliases:
links:
   orcid: ${orcid}
   linkedin: 
   github: 
   google-scholar: ${googleScholar}
   twitter:
   facebook:
   instagram: 
   youtube:
   email: ${email}
   home-page: ${homepage}
---

${name}

${bio}

{% include section.html %}
## Publications

{% include list.html data="citations" component="citation" filters="hyunseung-sho-list: true" %}`;
            
            document.getElementById('preview').textContent = markdown;
            return markdown;
        }
        
        function sendEmail() {
            const markdownContent = generateMarkdown();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // In a real implementation, you would use a server-side script to send the email
            // This is just a simulation that would work with a mailto link
            const subject = `Updated Profile for ${name}`;
            const body = `Please find attached the updated profile markdown file:\n\n${markdownContent}`;
            
            // Create a mailto link (this will open the user's email client)
            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
            
            // In a real implementation, you would use AJAX to send the data to a server-side script
            // that would handle the email sending. Here's how that might look:
            /*
            fetch('/send-profile-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    markdown: markdownContent
                }),
            })
            .then(response => response.json())
            .then(data => {
                alert('Profile sent successfully!');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('There was an error sending the profile.');
            });
            */
            
            alert("Your profile has been generated. An email will be opened in your email client with the markdown content.");
        }
    </script>
</body>
</html>