using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LmycWeb.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;

namespace LmycWeb.Controllers
{
    public class HomeController : Controller
    {

        private readonly UserManager<ApplicationUser> userManager;

        public HomeController(UserManager<ApplicationUser> userManager) {
            
            this.userManager = userManager;
        }

        [Authorize]
        public IActionResult Index()
        {
            ApplicationUser user = userManager.GetUserAsync(HttpContext.User).Result;

            ViewBag.WelcomeMessage = $"Welcome {user.FirstName}!";

            if (userManager.IsInRoleAsync(user, "Member").Result) {
                ViewBag.RoleMessage = "You are a member";
            }

            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
