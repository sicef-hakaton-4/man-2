using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Cors;
using Microsoft.AspNet.SignalR;

[assembly: OwinStartup(typeof(Hakaton.Web.Startup))]

namespace Hakaton.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseCors(CorsOptions.AllowAll);

            app.MapSignalR();
            //app.Map("/signalr", map =>
            //{
            //    var hubConfig = new HubConfiguration
            //    {

            //    };
            //    map.RunSignalR(hubConfig);
            //});

            //app.MapSignalR("/notifHub", new HubConfiguration());

            ConfigureAuth(app);
        }
    }
}
