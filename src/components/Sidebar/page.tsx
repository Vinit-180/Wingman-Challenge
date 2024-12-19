import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import {Settings,  Home,MessageCircle,Users } from "lucide-react"


  export function AppSidebar() {
    const items = [
      {
        title: "Home",
        url: "#",
        icon: Home,
      },
      {
        title: "MessageCircle",
        url: "#",
        icon: MessageCircle,
      },
      {
        title: "Users",
        url: "#",
        icon: Users,
      },
    ]
    const footerItems=[{
      title: "Settings",
      url: "#",
      icon: Settings,
    },]
    return (
      <Sidebar collapsible="icon">
        <SidebarContent>
          <SidebarGroup >
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              
            </SidebarMenu>
          </SidebarGroupContent>
          </SidebarGroup >
        </SidebarContent>
        <SidebarFooter>
              {footerItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              </SidebarFooter>
      </Sidebar>
    )
  }  
