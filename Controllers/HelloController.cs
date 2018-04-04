using System;
using Microsoft.AspNetCore.Mvc;

namespace hello_world
{
    [Route("api/[Controller]")]
    public class HelloController : Controller
    {
        [HttpGet]
        public IActionResult Greetings() {
            return Ok("Pull From API");
        }
    }
}
