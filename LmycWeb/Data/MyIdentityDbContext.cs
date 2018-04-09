using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using LmycWeb.Models;

public class MyIdentityDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, string>
{
    public MyIdentityDbContext
       (DbContextOptions<MyIdentityDbContext> options)
        : base(options)
    {
        //nothing here
    }

}
