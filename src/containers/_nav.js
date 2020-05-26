export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer',
        // badge: {
        //   color: 'primary',
        //   text: 'NEW'
        // }
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Withdraw money']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Authorization to withdraw',
        to: '/withdraw/manual',
        icon: 'cil-dollar'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Automatic transfer waiting list',
        to: '/withdraw/auto',
        icon: 'cil-dollar'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Error list, automatic transfer',
        to: '/withdraw/error',
        icon: 'cil-dollar'
      },

      {
        _name: 'CSidebarNavTitle',
        _children: ['Set Up']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'System Setting',
        to: '/settings/customer',
        icon: 'cil-settings'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Set up withdrawal',
        to: '/settings/transfer-withdraw',
        icon: 'cil-settings'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Set site colors and backgrounds',
        to: '/settings/styles',
        icon: 'cil-settings'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Set up a membership page',
        to: '/settings/register',
        icon: 'cil-settings'
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'The staff',
        route: '/base',
        icon: 'cil-people',
        items: [
          {
            name: 'Employee list',
            to: '/base/breadcrumbs'
          },
          {
            name: 'Add staff',
            to: '/base/cards'
          },
          {
            name: 'Carousels',
            to: '/base/carousels'
          },
          {
            name: 'Collapses',
            to: '/base/collapses'
          },
          {
            name: 'Forms',
            to: '/base/forms'
          },
          {
            name: 'Jumbotrons',
            to: '/base/jumbotrons'
          },
          {
            name: 'List Groups',
            to: '/base/list-groups'
          },
          {
            name: 'Navs',
            to: '/base/navs'
          },
          {
            name: 'Navbars',
            to: '/base/navbars'
          },
          {
            name: 'Paginations',
            to: '/base/paginations'
          },
          {
            name: 'Popovers',
            to: '/base/popovers'
          },
          {
            name: 'Progress Bars',
            to: '/base/progress-bars'
          },
          {
            name: 'Switches',
            to: '/base/switches'
          },
          {
            name: 'Tables',
            to: '/base/tables'
          },
          {
            name: 'Tabs',
            to: '/base/tabs'
          },
          {
            name: 'Tooltips',
            to: '/base/tooltips'
          }
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Bank deposit / withdraw money',
        to: '/charts',
        icon: 'cil-basket'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'True Wallet Deposit',
        to: '/charts',
        icon: 'cil-pencil'
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Promotion',
        route: '/buttons',
        icon: 'cil-star',
        items: [
          {
            name: 'Buttons',
            to: '/buttons/standard-buttons'
          },
          {
            name: 'Button Dropdowns',
            to: '/buttons/dropdowns'
          },
          {
            name: 'Button Groups',
            to: '/buttons/button-groups'
          },
          {
            name: 'Brand Buttons',
            to: '/buttons/brand-buttons'
          }
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Affiliate',
        to: '/charts',
        icon: 'cil-user'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Alert',
        to: '/charts',
        icon: 'cil-bell'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Report']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Deposit / Withdraw / Transfer',
        route: '/icons',
        icon: 'cil-layers',
        items: [
          {
            name: 'CoreUI Icons',
            to: '/icons/coreui-icons',
            badge: {
              color: 'info',
              text: 'NEW'
            }
          },
          {
            name: 'Brands',
            to: '/icons/brands'
          },
          {
            name: 'Flags',
            to: '/icons/flags'
          }
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Summary Report',
        route: '/notifications',
        icon: 'cil-layers',
        items: [
          {
            name: 'Alerts',
            to: '/notifications/alerts'
          },
          {
            name: 'Badges',
            to: '/notifications/badges'
          },
          {
            name: 'Modals',
            to: '/notifications/modals'
          }
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Affiliate Report',
        to: '/charts',
        icon: 'cil-layers'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Money transfer report',
        to: '/charts',
        icon: 'cil-layers'
      },
      {
        _name: 'CSidebarNavDivider',
        _class: 'm-2'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Various history']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Making a list of admins',
        to: '/charts',
        icon: 'cil-cloud-download'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Account List',
        to: '/charts',
        icon: 'cil-cloud-download'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Member']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Add members (old / new one)',
        to: '/charts',
        icon: 'cil-user-follow'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Manage members',
        to: '/charts',
        icon: 'cil-settings'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Manage Server']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Agent system',
        to: '/charts',
        icon: 'cil-layers'
      },
    ]
  }
]