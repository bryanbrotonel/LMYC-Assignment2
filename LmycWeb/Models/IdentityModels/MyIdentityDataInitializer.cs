using LmycWeb.Models;
using Microsoft.AspNetCore.Identity;

public static class MyIdentityDataInitializer
{
    public static void SeedData(UserManager<ApplicationUser> userManager,
		RoleManager<ApplicationRole> roleManager)
    {
        SeedRoles(roleManager);
        SeedUsers(userManager);
    }

    public static void SeedUsers(UserManager<ApplicationUser> userManager)
    {

        if (userManager.FindByNameAsync("a").Result == null)
        {
            ApplicationUser user = new ApplicationUser();
            user.UserName = "a";
            user.Email = "a@a.a";

            user.FirstName = "Admin";
            user.LastName = "Admin";

            user.Street = "Street";
            user.City = "White Rock";
            user.Province = "BC";
            user.PostalCode = "A1B 2C3";
            user.Country = "Canada";

            user.MobileNumber = "1234567890";
            user.SailingExperience = "Advanced";

            IdentityResult result = userManager.CreateAsync
            (user, "P@$$w0rd").Result;

            if (result.Succeeded)
            {
                userManager.AddToRoleAsync(user, "Admin").Wait();
            }
        }


        if (userManager.FindByNameAsync("m").Result == null)
        {
            ApplicationUser user = new ApplicationUser();

            user.UserName = "m";
            user.Email = "m@m.m";

            user.FirstName = "Member";
            user.LastName = "Member";

            user.Street = "Street";
            user.City = "White Rock";
            user.Province = "BC";
            user.PostalCode = "A1B 2C3";
            user.Country = "Canada";

            user.MobileNumber = "1234567890";
            user.SailingExperience = "Advanced";

            IdentityResult result = userManager.CreateAsync
            (user, "P@$$w0rd").Result;

            if (result.Succeeded)
            {
                userManager.AddToRoleAsync(user, "Member").Wait();
            }
        }

    }

    public static void SeedRoles(RoleManager<ApplicationRole> roleManager)
    {
        if (!roleManager.RoleExistsAsync("Admin").Result)
        {
            ApplicationRole role = new ApplicationRole();
            role.Name = "Admin";
            IdentityResult roleResult = roleManager.CreateAsync(role).Result;
        }


        if (!roleManager.RoleExistsAsync("Member").Result)
        {
            ApplicationRole role = new ApplicationRole();
            role.Name = "Member";
            IdentityResult roleResult = roleManager.CreateAsync(role).Result;
        }
    }
}
