using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private static readonly List<string> Todos = new() { "Build Fullstack App", "Look for job opportunities" };

        [HttpGet]
        public IActionResult GetTodos() => Ok(Todos);

        [HttpPost]
        public IActionResult AddTodo([FromBody] string todo)
        {
            Todos.Add(todo);
            return Ok(Todos);
        }
    }
}