window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.splash-screen').classList.add('hide-splash');
        document.querySelector('.splashmain').classList.add('hide-splash');
    }, 1800); // 2 seconds delay before fading out
});


let imagearray = [
        '/images/bg6.jpg',
        '/images/bg3.png',
        '/images/bg3.webp',
        '/images/bg4.webp',
        '/images/bg5.avif',
        '/images/bg5.jpg',
        '/images/bg1.jpg',
        '/images/bg5.webp',
        '/images/bg6.webp',
        '/images/bg7.jpg'
    ];
    let internimagearray = [
        '/images/codegnan.png',
        '/images/datavally.jpg',
        '/images/is.jpeg',
        '/images/onestop.jpeg'
    ];
    
    let internheaders = [
        "Codegnan Destination",
        "Datavally",
        "INdianServers",
        "One Stop"
    ];
    
    let number = 9;
    
    let internname = [
        "Java Full Stack Trainee<br> June-2024 To Jan-2025",
        "Full Stack Development <br> Jan-2024 To April-2024",
        "Machine Learning",
        "Front End Web Development From"
    ];
    let internskillsarr = [
        "Java, Servlets, Spring, MySQL, HTML, CSS, JavaScript",
        "Java, JDBC, MySQL, HTML, CSS, JavaScript",
        "Machine Learning, Python, CNN, Telegram Bot",
        "HTML, CSS, JavaScript"
    ]
    
    let interncontenarry = [
        "Engineered seamless front-end interfaces using HTML, CSS, and JavaScript in a collaborative environment, contributing to resolving key technical challenges that enhanced project efficiency and reduced timelines by one week.<br>Implemented responsive design principles to ensure optimal user experience across devices, resulting in a 20% increase in user engagement metrics.<br>Collaborated with cross-functional teams to gather requirements and deliver high-quality software solutions, enhancing team productivity and project outcomes.",
        "During my internship at Datavally as a full-stack Java developer, I contributed to building and maintaining web applications using Java, Spring Boot, and related technologies. I worked on both the front-end and back-end, ensuring seamless integration and optimization of the application’s performance.",
        "During my internship at Indenservers, I worked on machine learning, where I developed a disease prediction system using Convolutional Neural Networks (CNN) integrated with a Telegram bot for real-time interaction, enabling users to predict diseases based on input data.",
        "During my internship at Onestop as a full-stack web developer, I worked on dynamic web applications using JavaScript, HTML, CSS, and Java for back-end services. I collaborated with design and engineering teams to create responsive interfaces, integrated RESTful APIs for seamless data flow, optimized application performance, resolved bugs, and managed databases using MySQL, which enhanced my skills in both front-end and back-end development."
    ];
    

    let imageindex = 0; // Initialize index
    let div = document.getElementById('mainbodyimage'); // Get the div element

    let a= "hi I’m";
    b="Chandrasekhar Reddy Vallapureddy";
    c="Full Stack Developer";
    d="Aspiring Full Stack Developer with hands-on experience in Java, Python, and Django. Skilled in building scalable web applications and collaborating in agile environments. Eager to contribute to innovative projects while continuously enhancing my technical expertise";
    let pr1 = 5;
    let pr2= 2;
    let pr3 = 3;
    let pr4= 5;
    let i1=0,i2=0,i3=0,i4=0,p1=0,p2=0,p3=0,p4=0;
    let text1 = document.getElementById("n1");
    let text2 = document.getElementById("n2");
    let text3 = document.getElementById("n3");
    let text4 = document.getElementById("n4");
    let text11 = document.getElementById("p1");
    let text21 = document.getElementById("p2");
    let text31 = document.getElementById("p3");
    let text41 = document.getElementById("p4");
    let btn0 = document.getElementById("btn0");
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let btn4 = document.getElementById("btn4");
    let btn5 = document.getElementById("btn5");
    let btn6 = document.getElementById("btn6");
    let btn7 = document.getElementById("btn7");
    let btn8 = document.getElementById("btn8");
    let btn9 = document.getElementById("btn9");
    let iimage = document.getElementById("iimg");
    let ib0 = document.getElementById("ibtn0");
    let ib1 = document.getElementById("ibtn1");
    let ib2 = document.getElementById("ibtn2");
    let ib3 = document.getElementById("ibtn3");
    let internshipheader = document.getElementById("ihead");
    let internshipname = document.getElementById("iname");
    let internshipcontent = document.getElementById("icon")
    let internskills = document.getElementById("iskills");

        //start for the internship js location=--=================>

            function interndisplay(index) {
                if(index === number){
                    
                }else{
                    number = index;
                     // Set content and images
                iimage.style.backgroundImage = "url('" + internimagearray[index] + "')";
                internshipheader.innerHTML = internheaders[index];
                internshipname.innerHTML = internname[index];
                internshipcontent.innerHTML = interncontenarry[index];
                internskills.innerHTML = "Skills : "+internskillsarr[index];
                // Reset animation by temporarily setting it to 'none'
                iimage.style.animation = 'none';
                internshipheader.style.animation = 'none';
                internshipname.style.animation = 'none';
                internshipcontent.style.animation = 'none';
                internskills.style.animation = 'none';
            
                // Force a reflow to reset animation
                iimage.offsetHeight;
                internshipheader.offsetHeight;
                internshipname.offsetHeight;
                internshipcontent.offsetHeight;
                internskills.offsetHeight;
            
                // Reapply the normal animation
                iimage.style.animation = 'outer 0.5s ease-in-out';
                internshipheader.style.animation = 'inner 0.5s ease-in-out';
                internshipname.style.animation = 'inner 0.7s ease-in-out';
                internshipcontent.style.animation = 'inner 0.9s ease-in-out';
                internskills.style.animation = 'inner 0.7s ease-in-out';
            
                // Handle button scaling and margin changes
                updateButtonScaleAndMargins(index);
            
                // Optional: You can handle additional logic or animations here
            }
            
            function updateButtonScaleAndMargins(index) {
                let buttons = [ib0, ib1, ib2, ib3];
                buttons.forEach((button, i) => {
                    if (i === index) {
                        button.style.transform = "scale(2)";
                        button.style.margin = "3px 30px";
                    } else {
                        button.style.transform = "scale(1)";
                        button.style.margin = "3px";
                    }
                });
                }
               
            }
            let mi = 1; // Initial mode (1 for day mode, 0 for night mode)
            const modebtn = document.getElementById('modebutton');
            
            function mode() {
                if (mi === 1) {
                    mi = 0;
                    modebtn.style.backgroundImage = "url('/images/sun.png')"; // Night mode image
                    // Change the background color of the entire page (body)
                    document.body.style.backgroundColor = "#000000";
                    document.querySelector('.headerr').style.backgroundColor = "rgb(93, 92, 92)";
                    document.querySelector('.image').style.backgroundColor = "#fff";
                    document.querySelector('.links').style.backgroundColor = "rgb(253, 241, 255)";
                    document.querySelector('.myname').style.backgroundColor = "rgb(253, 241, 255)";
                    document.querySelector('.myname').style.boxShadow = "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px";  // Apply the box shadow

                    // for countrs div======
                    const counts = document.querySelectorAll('.count');
                    counts.forEach(count => {
                        count.style.color = "#fff"; // Change to red or any color you want
                    });

                    const projects = document.querySelectorAll('.projects');
                    projects.forEach(project => {
                        project.style.color = "#fff"; // Change to blue or any color you want
                    });

                    // for about div
                    document.querySelector('.aboutdiv').style.backgroundColor = "#000000";
                    document.querySelector('.mypara').style.backgroundColor = "#fff";
                    document.querySelector('.aboutlocontent2').style.color = "#fff";
                    document.querySelector('.aboutlocontent1').style.color = "#fff";
                    document.querySelector('.mypara').style.color = "#000000";

                    // for internship div
                    document.querySelector('.internships').style.color = "#fff";
                    document.querySelector('.internships').style.backgroundColor = "#000000";


                    // for projects
                    document.querySelector('.section-title').style.color = "#fff";
                    document.querySelector('.projects-section').style.backgroundColor = "#000000";
                    document.querySelector('.project-card').style.backgroundColor = "#000000";
                    document.querySelector('.project-card').style.backgroundColor = "#000000";
                    const projectCards = document.querySelectorAll('.project-card');
    
                    projectCards.forEach(card => {
                        card.style.backgroundColor = "#000000";  // Set to the specified color
                    });


                    // for skills div
                    document.querySelector('.skillimgfe1').style.backgroundColor="#000000";
                    document.querySelector('.skillimgfe2').style.backgroundColor="#000000";
                    document.querySelector('.skillimgfe3').style.backgroundColor="#000000";
                    document.querySelector('.skillimgfe4').style.backgroundColor="#000000";
                    document.querySelector('.skillimgbe1').style.backgroundColor="#000000";
                    document.querySelector('.skillimgbe2').style.backgroundColor="#000000";
                    document.querySelector('.skillimgbe3').style.backgroundColor="#000000";
                    document.querySelector('.skillimgbe4').style.backgroundColor="#000000";
                    document.querySelector('.skillimgbe5').style.backgroundColor="#000000";
                    document.querySelector('.skillimgf2').style.backgroundColor="#000000";
                    document.querySelector('.skillimgdb1').style.backgroundColor="#000000";
                    document.querySelector('.skillimgdb2').style.backgroundColor="#000000";

                    document.querySelector('.skillimgfe1').style.boxShadow = "rgba(255, 255, 255, 0.56) 0px 22px 70px 4px";
                    document.querySelector('.skillimgfe2').style.boxShadow = "rgba(255, 255, 255, 0.56) 0px 22px 70px 4px";
                    document.querySelector('.skillimgfe3').style.boxShadow = "rgba(255, 255, 255, 0.56) 0px 22px 70px 4px";
                    document.querySelector('.skillimgfe4').style.boxShadow = "rgba(255, 255, 255, 0.56) 0px 22px 70px 4px";
                    document.querySelector('.skillimgbe1').style.boxShadow = "rgba(255, 255, 255, 0.56) 0px 22px 70px 4px";
                    document.querySelector('.skillimgbe2').style.boxShadow = "rgba(255, 255, 255, 0.56) 0px 22px 70px 4px";
                    document.querySelector('.skillimgbe3').style.boxShadow = "rgba(255, 255, 255, 0.56) 0px 22px 70px 4px";
                    document.querySelector('.skillimgbe4').style.boxShadow = "rgba(255, 255, 255, 0.56) 0px 22px 70px 4px";
                    document.querySelector('.skillimgbe5').style.boxShadow = "rgba(255, 255, 255, 0.56) 0px 22px 70px 4px";
                    document.querySelector('.skillimgf2').style.boxShadow = "rgba(255, 255, 255, 0.56) 0px 22px 70px 4px";
                    document.querySelector('.skillimgdb1').style.boxShadow = "rgba(255, 255, 255, 0.56) 0px 22px 70px 4px";
                    document.querySelector('.skillimgdb2').style.boxShadow = "rgba(255, 255, 255, 0.56) 0px 22px 70px 4px";
                    const skilldivs = document.querySelectorAll('.skill');  // Use correct variable name (skilldivs)

                    // Iterate over each skill div and apply the background color and border
                    skilldivs.forEach(skilldiv => {
                        skilldiv.style.backgroundColor = "#000000";     // Set background color to white
                        skilldiv.style.border = "1px solid white";   // Set border to 3px solid white
                    });
                    
                    const jjjElements = document.querySelectorAll('.jjj');
                    jjjElements.forEach(element => {
                        element.style.color = "#00ff00"; // Set color for 'jjj' class elements
                    });
                
                    // Select all elements with class 'jj' and change their color
                    const jjElements = document.querySelectorAll('.jj');
                    jjElements.forEach(element => {
                        element.style.color = "#fff";
                         // Set color for 'jj' class elements
                    });
                    // Select the parent element
                    const frontendElement = document.querySelector('.frontend');

                    // Change the color of the parent element (this will affect `::before` if it inherits color)
                    frontendElement.style.color = "#fff"; // This will change the text color or inherited properties

                    // Add a class to change the ::before pseudo-element via CSS
                    frontendElement.classList.add('frontend');
                    document.querySelector('.ccname').style.color = "#fff"
                    


                    // Select the parent element
                    const backendElement = document.querySelector('.backend');

                    // Change the color of the parent element (this will affect `::before` if it inherits color)
                    backendElement.style.color = "#fff"; // This will change the text color or inherited properties

                    // Add a class to change the ::before pseudo-element via CSS
                    backendElement.classList.add('backend');
            
                    // Select the parent element
                    const softwaresElement = document.querySelector('.softwares');

                    // Change the color of the parent element (this will affect `::before` if it inherits color)
                    softwaresElement.style.color = "#fff"; // This will change the text color or inherited properties

                    // Add a class to change the ::before pseudo-element via CSS
                    softwaresElement.classList.add('softwares');


                    // Select the parent element
                    const databaseElement = document.querySelector('.databases');

                    // Change the color of the parent element (this will affect `::before` if it inherits color)
                    databaseElement.style.color = "#fff"; // This will change the text color or inherited properties

                    // Add a class to change the ::before pseudo-element via CSS
                    databaseElement.classList.add('databases');


                    // for mail sender 
                    document.querySelector('.mailsender').style.backgroundColor = "#000000";
                    document.querySelector('.mailtitle').style.color = "#fff";
                    let maini = document.querySelectorAll('.iii');
                    maini.forEach(maini=>{
                        maini.style.color="#fff";
                    })
                    document.querySelector('.sendername').style.color = "#fff";







                } else {
                    mi = 1;
                    modebtn.style.backgroundImage = "url('/images/moon.png')"; // Night mode image
                    // Change the background color of the entire page (body)
                    document.body.style.backgroundColor = "#fff";
                    document.querySelector('.headerr').style.backgroundColor = "rgba(255, 255, 255, 0.782)";
                    document.querySelector('.image').style.backgroundColor = "#b302f9"
                    document.querySelector('.links').style.backgroundColor = "#fff";
                    document.querySelector('.myname').style.backgroundColor = "#fff";
                    document.querySelector('.links').style.backgroundColor = "rgb(253, 241, 255)";
                    document.querySelector('.myname').style.backgroundColor = "rgb(253, 241, 255)";
                    document.querySelector('.myname').style.boxShadow = "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px";  // Apply the box shadow

                    // for countrs div======
                    const counts = document.querySelectorAll('.count');
                    counts.forEach(count => {
                        count.style.color = "#000000"; // Change to red or any color you want
                    });

                    const projects = document.querySelectorAll('.projects');
                    projects.forEach(project => {
                        project.style.color = "#000000"; // Change to blue or any color you want
                    });

                    // for about div
                    document.querySelector('.aboutdiv').style.backgroundColor = "rgba(226, 202, 226, 0.323)";
                    document.querySelector('.mypara').style.backgroundColor = "";
                    document.querySelector('.aboutlocontent2').style.color = "#000000";
                    document.querySelector('.aboutlocontent1').style.color = "#000000";
                    document.querySelector('.mypara').style.color = "#000000";


                    // for internship div
                    document.querySelector('.internships').style.color = "#000000";
                    document.querySelector('.internships').style.backgroundColor = "rgba(248, 232, 248, 0.311)";


                    // for projects
                    document.querySelector('.section-title').style.color = "#000000";
                    document.querySelector('.projects-section').style.backgroundColor = "#fff";
                    const projectCards = document.querySelectorAll('.project-card');
    
                    projectCards.forEach(card => {
                        card.style.backgroundColor = "#fbf1ff";  // Set to the specified color
                    });


                    // for skills div
                    document.querySelector('.skillimgfe1').style.backgroundColor="#fff";
                    document.querySelector('.skillimgfe2').style.backgroundColor="#fff";
                    document.querySelector('.skillimgfe3').style.backgroundColor="#fff";
                    document.querySelector('.skillimgfe4').style.backgroundColor="#fff";
                    document.querySelector('.skillimgbe1').style.backgroundColor="#fff";
                    document.querySelector('.skillimgbe2').style.backgroundColor="#fff";
                    document.querySelector('.skillimgbe3').style.backgroundColor="#fff";
                    document.querySelector('.skillimgbe4').style.backgroundColor="#fff";
                    document.querySelector('.skillimgbe5').style.backgroundColor="#fff";
                    document.querySelector('.skillimgf2').style.backgroundColor="#fff";
                    document.querySelector('.skillimgdb1').style.backgroundColor="#fff";
                    document.querySelector('.skillimgdb2').style.backgroundColor="#fff";

                    
                    document.querySelector('.skillimgfe1').style.boxShadow = "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px";
                    document.querySelector('.skillimgfe2').style.boxShadow = "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px";
                    document.querySelector('.skillimgfe3').style.boxShadow = "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px";
                    document.querySelector('.skillimgfe4').style.boxShadow = "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px";
                    document.querySelector('.skillimgbe1').style.boxShadow = "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px";
                    document.querySelector('.skillimgbe2').style.boxShadow = "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px";
                    document.querySelector('.skillimgbe3').style.boxShadow = "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px";
                    document.querySelector('.skillimgbe4').style.boxShadow = "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px";
                    document.querySelector('.skillimgbe5').style.boxShadow = "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px";
                    document.querySelector('.skillimgf2').style.boxShadow = "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px";
                    document.querySelector('.skillimgdb1').style.boxShadow = "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px";
                    document.querySelector('.skillimgdb2').style.boxShadow = "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px";
                    const skilldivs = document.querySelectorAll('.skill');  // Use correct variable name (skilldivs)

                    // Iterate over each skill div and apply the background color and border
                    skilldivs.forEach(skilldiv => {
                        skilldiv.style.backgroundColor = "#efe1f46c";     // Set background color to white
                        skilldiv.style.border = "1px solid white";   // Set border to 3px solid white
                    });
                    
                    const jjjElements = document.querySelectorAll('.jjj');
                    jjjElements.forEach(element => {
                        element.style.color = "#000000"; // Set color for 'jjj' class elements
                    });
                
                    // Select all elements with class 'jj' and change their color
                    const jjElements = document.querySelectorAll('.jj');
                    jjElements.forEach(element => {
                        element.style.color = "#000000";
                         // Set color for 'jj' class elements
                    });
                    // Select the parent element
                    const frontendElement = document.querySelector('.frontend');

                    // Change the color of the parent element (this will affect `::before` if it inherits color)
                    frontendElement.style.color = "#000000"; // This will change the text color or inherited properties

                    // Add a class to change the ::before pseudo-element via CSS
                    frontendElement.classList.add('frontend');
                    document.querySelector('.ccname').style.color = "#000000"
                    


                    // Select the parent element
                    const backendElement = document.querySelector('.backend');

                    // Change the color of the parent element (this will affect `::before` if it inherits color)
                    backendElement.style.color = "#000000"; // This will change the text color or inherited properties

                    // Add a class to change the ::before pseudo-element via CSS
                    backendElement.classList.add('backend');
            
                    // Select the parent element
                    const softwaresElement = document.querySelector('.softwares');

                    // Change the color of the parent element (this will affect `::before` if it inherits color)
                    softwaresElement.style.color = "#000000"; // This will change the text color or inherited properties

                    // Add a class to change the ::before pseudo-element via CSS
                    softwaresElement.classList.add('softwares');


                    // Select the parent element
                    const databaseElement = document.querySelector('.databases');

                    // Change the color of the parent element (this will affect `::before` if it inherits color)
                    databaseElement.style.color = "#000000"; // This will change the text color or inherited properties

                    // Add a class to change the ::before pseudo-element via CSS
                    databaseElement.classList.add('databases');


                    // for mail sender 
                    document.querySelector('.mailsender').style.backgroundColor = "#fbf1ff";
                    document.querySelector('.mailtitle').style.color = "#000000";
                    let maini = document.querySelectorAll('.iii');
                    maini.forEach(maini=>{
                        maini.style.color="#000000";
                    })
                    document.querySelector('.sendername').style.color = "#000000";







                
                }
            }
            
            // Set initial button image
            modebtn.style.backgroundImage = "url('/images/moon.png')";           

    function changeImage(index) {
        imageindex = index; // Update the image index to the selected one
        div.style.backgroundImage = "url('" + imagearray[imageindex] + "')";
        div.style.animation = 'none';
        div.offsetHeight;

        div.style.animation="ooo 1s ease";
        if(imageindex===7 || imageindex===0|| imageindex===8 ){
            text1.style.color = "white";
            text2.style.color = "white";
            text3.style.color = "white";
            text4.style.color = "white";
            
        }
        else{
            text1.style.color = "black";
            text2.style.color = "black";
            text3.style.color = "black";
            text4.style.color = "black";
            
        }
        btnanimation(index)
        clearInterval(imageinterval);
        
    }
    function btnanimation(index){
        let buttons = [btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
                buttons.forEach((button, i) => {
                    if (i === index) {
                        button.style.transform = "scale(1.2)";
                        button.style.backgroundColor="rgba(217, 0, 255, 0.782)";
                    } else {
                        button.style.transform = "scale(1)";
                        button.style.backgroundColor="";
                    }
                });
    }

    // Automatic slideshow using setInterval
    let imageinterval = setInterval(function() {
        
        imageindex = (imageindex + 1) % imagearray.length; // Increment and loop back when necessary
        div.style.backgroundImage = "url('" + imagearray[imageindex] + "')";
        div.style.animation = 'none';
        div.offsetHeight;
        div.style.animation="ooo 0.5s ease-in";
        if(imageindex===7 || imageindex===0|| imageindex===8 ){
            text1.style.color = "white";
            text2.style.color = "white";
            text3.style.color = "white";
            text4.style.color = "white";
            
        }
        else{
            text1.style.color = "black";
            text2.style.color = "black";
            text3.style.color = "black";
            text4.style.color = "black";
            
        }
        btnanimation(imageindex);
    }, 5000); // Change image every 3 seconds

    // Initialize with the first image
    div.style.backgroundImage = "url('" + imagearray[0] + "')";
    btn0.style.backgroundColor="rgba(217, 0, 255, 0.782)";
    btn0.style.transform = "scale(1.2)";
    text1.style.color = "white";
    text2.style.color = "white";
    text3.style.color = "white";
    text4.style.color = "white";



        //end of the channging the image in the main div under the header





    function forn1(){
    text1.innerHTML = a.substring(0,i1++);
    if(i1>a.length) clearInterval(st1)

    }
    function forn2(){
    text2.innerHTML = b.substring(0,i2++)
    if(i2>b.length) clearInterval(st2) 
    }
    function forn3(){
    text3.innerHTML = c.substring(0,i3++)
    if(i3>c.length) clearInterval(st3) 
    }
    function forn4(){
    text4.innerHTML = d.substring(0,i4++)
    if(i4>d.length) clearInterval(st4) 
    }
    function pp1(){
    text11.innerHTML= p1+"+";
    p1++
    if(p1>pr1)clearInterval(ppp1);
    }
    function pp2(){
    text21.innerHTML= p2+"+";
    p2++
    if(p2>pr2)clearInterval(ppp2);
    }
    function pp3(){
    text31.innerHTML= p3+"+";
    p3++
    if(p1>pr3)clearInterval(ppp3);
    }
    function pp4(){
    text41.innerHTML= p4+"+";
    p4++
    if(p4>pr4)clearInterval(ppp4);
    }
setTimeout(function(){


    let st2 = setInterval(forn2,100)
    let st1 = setInterval(forn1,100);
    let st3 = setInterval(forn3,100);
    let st4 = setInterval(forn4,10); 
},2500)

let ppp1 = setInterval(pp1,50);
let ppp2 = setInterval(pp2,50);
let ppp3 = setInterval(pp3,50);
let ppp4 = setInterval(pp4,50);


    document.addEventListener("DOMContentLoaded", () => {
        const observerOptions = {
            root: null, // viewport
            threshold: 0.1 // Trigger when 10% of the element is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        }, observerOptions);

        // Select all elements that you want to animate on scroll
        const animatedElements = document.querySelectorAll(".iimg, iskills, .skill, .ihead, .iname, .icon, .internbtn,.project-card, .heading1, .heading2, .heading3, .data, .sm, .kkk, .iii,.sendname, .sendercontent, .submitbutton, .mailtitle, .mailsender, .aboutlocontent1, .aboutlocontent2,.mypara");


        // Observe each element
        animatedElements.forEach(element => observer.observe(element));
    });






























    // Define the media query
const mediaQuery = window.matchMedia('(max-width: 481px)');

// Function to apply styles based on media query match
function applyStyles(e) {
  if (e.matches) {
    // If the media query matches (screen width is >= 481px), apply the styles
    let st2 = setInterval(forn2,100)
    let st1 = setInterval(forn1,100);
    let st3 = setInterval(forn3,100);
    let st4 = setInterval(forn4,10); 
    // You can add more styles here
  } else {
    // Revert to original styles if the media query does not match
    setTimeout(function(){


        let st2 = setInterval(forn2,100)
        let st1 = setInterval(forn1,100);
        let st3 = setInterval(forn3,100);
        let st4 = setInterval(forn4,10); 
    },2500)
  }
}

// Listen for changes in the media query status
mediaQuery.addListener(applyStyles);

// Initial check for when the page loads
applyStyles(mediaQuery);


