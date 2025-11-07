using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private static readonly List<string> Todos = new() { "Buy milk", "Walk the dog" };

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