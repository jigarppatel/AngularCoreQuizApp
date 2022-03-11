using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularCoreQuizApp.Models;

namespace AngularCoreQuizApp.Models
{
    public class QuizContext : DbContext
    {
        public QuizContext(DbContextOptions<QuizContext> options) : base(options) { }
        public DbSet<Question> Questions { get; set; }1
        public DbSet<AngularCoreQuizApp.Models.Quiz> Quiz { get; set; }
    }
}
