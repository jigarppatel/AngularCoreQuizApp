using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularCoreQuizApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularCoreQuizApp.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class QuestionsController : Controller
    {
        readonly QuizContext context;
        public QuestionsController(QuizContext context)
        {
            this.context = context;
        }

        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Question> Get()
        {
            return context.Questions;
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Question question)
        {
            context.Questions.Add(question);
            await context.SaveChangesAsync();
            return Ok(question);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]Question questionData)
        {
            var question = await context.Questions.SingleOrDefaultAsync(q=>q.ID==id);

            if (question == null)
                return BadRequest();
            question.Text = questionData.Text;
            question.CorrectAnswer = questionData.CorrectAnswer;
            question.Answer1 = questionData.Answer1;
            question.Answer2 = questionData.Answer2;
            question.Answer3 = questionData.Answer3;
            context.Questions.Attach(question);
            await context.SaveChangesAsync();
            return Ok(question);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
