
using AngularCoreQuizApp.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace AngularCoreQuizApp
{
    public static class SeedData
    {
        public static  void Initialize(IServiceProvider services)
        {
             AddTestData(
                services.GetRequiredService<QuizContext>());
        }

        public static  void AddTestData(QuizContext context)
        {
            if (context.Quiz.Any())
            {
                // Already has data
                return;
            }

            Quiz1(context);
            Quiz2(context);
            Quiz3(context);
            //Quiz4(context);
            //Quiz5(context);
            //var user = new IdentityUser { UserName = "test@email.com", Email = "test@email.com" };
            //var result = await userManager.CreateAsync(user, "Test@@123");
        }
        static void Quiz2(QuizContext context)
        {
            Quiz quiz1 = new Quiz();
            quiz1.Title = "C# Test";
            context.Quiz.Add(quiz1);
            context.SaveChanges();

            Question q1 = new Question();
            q1.QuizId = quiz1.ID;
            q1.Text = "A class that cannot be inherited is what type of class?";
            q1.CorrectAnswer = "Sealed";
            q1.Answer1 = "Gather";
            q1.Answer2 = "Static";
            q1.Answer3 = "Constru";
            context.Questions.Add(q1);

            q1 = new Question();
            q1.QuizId = quiz1.ID;
            q1.Text = "Which of the following is/are not true about the class?";
            q1.CorrectAnswer = "Classes does not support Inheritance";
            q1.Answer1 = "Classes can have both contractors and destructors";
            q1.Answer2 = "Classes are reference type";
            q1.Answer3 = "All are true";
            context.Questions.Add(q1);

            q1 = new Question();
            q1.QuizId = quiz1.ID;
            q1.Text = "Different ways a method can be overloaded in C#.NET";
            q1.CorrectAnswer = "All";
            q1.Answer1 = "Different parameter data types";
            q1.Answer2 = "Different order of parameters";
            q1.Answer3 = "Different number of parameters";
            context.Questions.Add(q1);

            q1 = new Question();
            q1.QuizId = quiz1.ID;
            q1.Text = "Which of these statements correctly declares a two-dimensional array in C#?";
            q1.CorrectAnswer = "int[,] myArray;";
            q1.Answer1 = "int[][] myArray;";
            q1.Answer2 = "System.Array[2] myArray;";
            q1.Answer3 = "int[2] myArray;";
            context.Questions.Add(q1);

            q1 = new Question();
            q1.QuizId = quiz1.ID;
            q1.Text = "Which is true about Interface and abstract methods?";
            q1.CorrectAnswer = "All the methods inside Interface is an abstract method.";
            q1.Answer1 = "We can write only one abstract method inside interface";
            q1.Answer2 = "No method is abstract inside interface";
            q1.Answer3 = " None of the options";
            context.Questions.Add(q1);

            q1 = new Question();
            q1.QuizId = quiz1.ID;
            q1.Text = "Difference between Convert.ToString() and ToString()";
            q1.CorrectAnswer = "Convert.ToString() handle null values but ToString() don't";
            q1.Answer1 = "Convert.ToString() only handle null values";
            q1.Answer2 = "ToString() handle null values but Convert.ToString() don't";
            q1.Answer3 = "ToString() output as per format supplied";
            context.Questions.Add(q1);

            q1 = new Question();
            q1.QuizId = quiz1.ID;
            q1.Text = "Which of the following assemblies can be stored in Global Assembly Cache?";
            q1.CorrectAnswer = "Shared Assemblies";
            q1.Answer1 = "Private Assemblies";
            q1.Answer2 = "Protected Assemblies";
            q1.Answer3 = "Friend Assemblies";
            context.Questions.Add(q1);

            q1 = new Question();
            q1.QuizId = quiz1.ID;
            q1.Text = "What is a delegate?";
            q1.CorrectAnswer = " A strongly typed function pointer.";
            q1.Answer1 = " A reference to an object in a different process.";
            q1.Answer2 = " An inter-process message channel.";
            q1.Answer3 = "A light weight thread or process that can call a single method.";
            context.Questions.Add(q1);

            context.SaveChanges();
        }
        static void Quiz3(QuizContext context)
        {
            Quiz quiz1 = new Quiz();
            quiz1.Title = "ASP.NET MVC Test";
            context.Quiz.Add(quiz1);
            context.SaveChanges();

            Question q1 = new Question();
            q1.QuizId = quiz1.ID;
            q1.Text = "MVC stands for ______.";
            q1.CorrectAnswer = "Model, View & Controller";
            q1.Answer1 = "Model, Vision & Control ";
            q1.Answer2 = "Model, ViewData & Controller";
            q1.Answer3 = "Model, Data & Controller";
            context.Questions.Add(q1);

            q1 = new Question();
            q1.QuizId = quiz1.ID;
            q1.Text = "Which of following is TRUE?";
            q1.CorrectAnswer = "The controller executes an incoming request.";
            q1.Answer1 = "The controller redirects incoming request to model.";
            q1.Answer2 = "The controller controls the data.";
            q1.Answer3 = "The controller render html to view.";
            context.Questions.Add(q1);

            q1 = new Question();
            q1.QuizId = quiz1.ID;
            q1.Text = "Which of the following is a type of view in MVC?";
            q1.CorrectAnswer = "Partial view";
            q1.Answer1 = "Executable view";
            q1.Answer2 = "Data view";
            q1.Answer3 = "Designer view";
            context.Questions.Add(q1);

            q1 = new Question();
            q1.QuizId = quiz1.ID;
            q1.Text = "Which of the following is TRUE?";
            q1.CorrectAnswer = "Action method must be public method in a controller class.";
            q1.Answer1 = "Action method can be protected method in a controller class.";
            q1.Answer2 = "Action method can be private method in a controller class.";
            q1.Answer3 = "Action method can be static method in a controller class.";
            context.Questions.Add(q1);

            q1 = new Question();
            q1.QuizId = quiz1.ID;
            q1.Text = "Which of the followings are ActionSelectors?";
            q1.CorrectAnswer = "All of the above";
            q1.Answer1 = "ActionName";
            q1.Answer2 = "NonAction";
            q1.Answer3 = "ActionVerbs";
            context.Questions.Add(q1);

            q1 = new Question();
            q1.QuizId = quiz1.ID;
            q1.Text = "Which is the default http method for an action method?";
            q1.CorrectAnswer = "HttpGet";
            q1.Answer1 = "HttpPost";
            q1.Answer2 = "HttpPut";
            q1.Answer3 = "HttpDelete";
            context.Questions.Add(q1);

            q1 = new Question();
            q1.QuizId = quiz1.ID;
            q1.Text = "TempData is useful to _______.";
            q1.CorrectAnswer = "Transfer data from one view to another view";
            q1.Answer1 = "Transfer data from controller to controller ";
            q1.Answer2 = "Transfer data from view to controller ";
            q1.Answer3 = "Store data permanently. ";
            context.Questions.Add(q1);

            q1 = new Question();
            q1.QuizId = quiz1.ID;
            q1.Text = "Bundling allows __________.";
            q1.CorrectAnswer = "Loading of multiple script files in single request.";
            q1.Answer1 = "Loading of multiple images in single request. ";
            q1.Answer2 = "Loading of multiple view files in single request. ";
            q1.Answer3 = "Loading of caching of multiple script files. ";
            context.Questions.Add(q1);

            q1 = new Question();
            q1.QuizId = quiz1.ID;
            q1.Text = "Area allows us to ____________.";
            q1.CorrectAnswer = "Partition large application into smaller units. ";
            q1.Answer1 = "Separate Mode, View and Controller folders. ";
            q1.Answer2 = "Partition View folder of large application into multiple view folders ";
            q1.Answer3 = "All ";
            context.Questions.Add(q1);

            context.SaveChanges();
        }
        static void Quiz4(QuizContext context)
        {
            Quiz quiz1 = new Quiz();
            quiz1.Title = "ASP.NET Core Test";
            context.Quiz.Add(quiz1);
            context.SaveChanges();
        }
        static void Quiz5(QuizContext context)
        {
            Quiz quiz1 = new Quiz();
            quiz1.Title = "Angular Test";
            context.Quiz.Add(quiz1);
            context.SaveChanges();
        }
        static void Quiz1(QuizContext context)
        {
            Quiz quiz1 = new Quiz();
            quiz1.Title = "ASP.NET Test";
            context.Quiz.Add(quiz1);
            context.SaveChanges();

            Question q1 = new Question();
            q1.QuizId = quiz1.ID;
            q1.Text = "What class does the ASP.NET Web Form class inherit from by default?";
            q1.CorrectAnswer = "System.Web.UI.Page";
            q1.Answer1 = "System.Web.UI.Form";
            q1.Answer2 = "System.Web.GUI.Page";
            q1.Answer3 = "System.Web.Form";
            context.Questions.Add(q1);


            q1 = new Question();
            q1.QuizId = quiz1.ID;
            q1.Text = "We can manage states in asp.net application using";
            q1.CorrectAnswer = "All";
            q1.Answer1 = "Session Objects";
            q1.Answer2 = "Application Objects";
            q1.Answer3 = "Viewstate";
            context.Questions.Add(q1);

            q1 = new Question();
            q1.QuizId = quiz1.ID;
            q1.Text = "When writing ASP code, what are the correct delimiters to use?";
            q1.CorrectAnswer = "<% code %>";
            q1.Answer1 = "< code >";
            q1.Answer2 = "<% code >";
            q1.Answer3 = "";
            context.Questions.Add(q1);

            q1 = new Question();
            q1.QuizId = quiz1.ID;
            q1.Text = "What does Response.End will do?";
            q1.CorrectAnswer = "It will stop the server process";
            q1.Answer1 = "None of the options";
            q1.Answer2 = "It will stop the client process";
            q1.Answer3 = "";
            context.Questions.Add(q1);

            q1 = new Question();
            q1.QuizId = quiz1.ID;
            q1.Text = "When does Garbage collector run?";
            q1.CorrectAnswer = "When application is running low of memory";
            q1.Answer1 = "It runs random";
            q1.Answer2 = " When application is running for more than 15 minutes";
            q1.Answer3 = "None of the above";
            context.Questions.Add(q1);
            context.SaveChanges();
        }
    }
}
