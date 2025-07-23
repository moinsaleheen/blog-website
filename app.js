    let usersArray = JSON.parse(localStorage.getItem("users")) || [];

    function signup() {
        event.preventDefault();

        let username = document.getElementById("username").value;
        let email = document.getElementById("useremail").value;
        let password = document.getElementById("userpassword").value;

        for (let i = 0; i < usersArray.length; i++) {
            if (usersArray[i].email === email) {
                alert("Account already exists with this email.");
                return;
            }
        }

        let newUser = {
            name: username,
            email: email,
            password: password
        };

        usersArray.push(newUser);

        localStorage.setItem("users", JSON.stringify(usersArray));

        localStorage.setItem("currentUser", JSON.stringify({
            email: email,
            password: password
        }));

        alert("Account created successfully!");
    }

    //LOGIN

    function signin(event) {
        event.preventDefault();

        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;

        let usersArray = JSON.parse(localStorage.getItem("users")) || [];

        let found = false;

        for (let i = 0; i < usersArray.length; i++) {
            if (usersArray[i].email === email && usersArray[i].password === password) {
            found= true;

                localStorage.setItem("currentUser", JSON.stringify({
                    email: email,
                    password: password
                }));
                document.location.href="blog.html";
            }
        }

        if (!found) {
            alert("Invalid email or password!");
        }
    }
    document.getElementById("userblog").innerHTML = usersArray[0].name;

    // Blog
    let blogArray = JSON.parse(localStorage.getItem("blogs")) || [];

    function publishBlog(event){
        event.preventDefault();

        // let blogdate = document.getElementById("blogdate").value;
        let category = document.getElementById("category").value;
        let blogname = document.getElementById("authorname").value;
        let blogtitle = document.getElementById("blogtitle").value;
        let blogdetail = document.getElementById("blogdetail").value;

        let newblog = {
            // blogdate: blogdate,
            category: category,
            authorname: authorname,
            blogtitle: blogtitle,
            blogdetail: blogdetail,
        }

        blogArray.push(newblog);

        console.log("Blog Publish successfully!");

        localStorage.setItem("blogs", JSON.stringify(blogArray));

        // document.getElementById("blogdate").value = "";
        document.getElementById("category").value = "";
        document.getElementById("authorname").value = "";
        document.getElementById("blogtitle").value = "";
        document.getElementById("blogdetail").value = "";

    }

    //viewblog

    function viewblog() {
        event.preventDefault();

        document.getElementById("clear").style.display = "none";
        document.getElementById("yourblog").innerHTML= "YOUR EXIT BLOGS";
        document.getElementById("none").style.display = "block";
        document.getElementById("blogviews").style.display = "block";

        let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

        let output = "";
        if (blogs.length === 0) {
        output = "<p>No blogs found.</p>";
        } else {
            blogs.forEach((blog, index) => {
                output += `<div style="border:1px solid #ccc; border-radius: 15px; padding:20px; display: flex; flex-direction: column; gap: 10px; background-color: #5B58B1; color: white;">
                <h3>${blog.blogtitle}</h3>
                <p><strong>Author:</strong> ${blog.authorname}</p>
                <p><strong>Category:</strong> ${blog.category}</p>
                <p>${blog.blogdetail}</p></div>`;
        });
    }

    document.getElementById("blogviews").innerHTML = output;
        
    }

    function creatBlog(event) {
        event.preventDefault();

        document.getElementById("yourblog").innerHTML= "CREATE BLOG";
        document.getElementById("none").style.display = "none";
        document.getElementById("blogviews").style.display = "none";
        document.getElementById("clear").style.display = "flex";
    }