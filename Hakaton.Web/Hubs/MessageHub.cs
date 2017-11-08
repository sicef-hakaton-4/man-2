using Microsoft.AspNet.SignalR;
using Hakaton.Web.Models;
using System.Linq;
using System;

namespace Hakaton.Web.Hubs
{
    public class MessageHub : Hub
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        public void Hello()
        {
            Clients.All.hello("message from messagehub");
        }

        public void SendMessage(string senderId, string recieverId, string content)
        {
            try
            {

                Message msg = new Message();

                msg.SenderId = senderId;/*db.Users.Where(u => u.Email == mail_from).ToList().First();*/
                msg.ReceiverId = recieverId;/*db.Users.Where(u => u.Email == mail_to).ToList().First();*/
                msg.Content = content;

                msg.Time = DateTime.Now;
                msg.Opened = false;

                db.Messages.Add(msg);
                db.SaveChanges();

                Clients.All.addMessage(msg.Id, senderId, recieverId, content);
            }
            catch (Exception ex)
            {

            }
        }

        public void ReadMessage(string msg_id)
        {
            int id = int.Parse(msg_id);

            db.Messages.Find(id).Opened = true;
            db.SaveChanges();
        }
    }
}