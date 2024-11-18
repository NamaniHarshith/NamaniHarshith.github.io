import React from 'react';
import './LandingPage.css'; // This will contain specific styling for the landing page
import {  Bar, Pie } from 'react-chartjs-2'; // Import Pie chart
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement,ChartDataLabels); // Register ArcElement for Pie chart
function LandingPage() {
  // Chart data and configuration
  const chartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Transactions ($)',
        data: [1200, 900, 1500, 800, 2000, 1700, 2200], // Replace with your dynamic data if needed
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
      },
      {
        label: 'Revenue ($)',
        data: [1000, 1100, 1300, 700, 1900, 1600, 2100], // Second dataset for comparison
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const pieChartData = {
    labels: ['Entertainment', 'Bill Expense', 'Others', 'Investments'],
    datasets: [
      {
        label: 'Expense Distribution',
        data: [30, 15, 35, 20], // Corresponding percentages
        backgroundColor: [
          'rgba(255, 99, 132, 1)',  // Entertainment
          'rgba(54, 162, 235, 1)',  // Bill Expense
          'rgba(255, 206, 86, 1)',  // Others
          'rgba(75, 192, 192, 1)',  // Investments
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', 
          'rgba(54, 162, 235, 1)', 
          'rgba(255, 206, 86, 1)', 
          'rgba(75, 192, 192, 1)', 
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display:false,
      },
      datalabels: {
        display: true,
        color: 'black',
        font: {
          weight: 'bold',
          size: 10,
        },
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${label}: ${value}%`; // Display category name and value
        },
      },
    },
  };


  return (
    <div className="app-container">
      <aside className="sidebar">
      <div style={{ display: 'flex', alignItems: 'center',gap:'5px' }}>
  <img 
    src="\images\iconfinder_vector_65_09_473792 1@2x.png" 
    alt="Bank logo" 
    style={{ width: '20px', height: '20px', marginRight: '10px' }} 
  />
  <p style={{ fontSize: '20px',color:'black',}}>BankDash.</p>
</div>
        <nav>
          <ul>
            <li style={{ color:'blue'}} > <div style={{ display: 'flex', alignItems: 'center',gap:'5px' }}>
  <img 
    src="\images\home 2.png" 
    alt="Bank logo" 
    style={{ width: '20px', height: '20px', marginRight: '10px' }} 
  />
  Dashboard
</div>
</li>
            <li><div style={{ display: 'flex', alignItems: 'center',gap:'5px' }}>
  <img 
    src="\images\transfer 1.png" 
    alt="Bank logo" 
    style={{ width: '20px', height: '20px', marginRight: '10px' }} 
  />Transaction
</div></li>
            <li><div style={{ display: 'flex', alignItems: 'center',gap:'5px' }}>
  <img 
    src="\images\user 3 1.png" 
    alt="Bank logo" 
    style={{ width: '20px', height: '20px', marginRight: '10px' }} 
  />Accounts
</div></li>
            <li><div style={{ display: 'flex', alignItems: 'center',gap:'5px' }}>
  <img 
    src="\images\economic-investment 1.png" 
    alt="Bank logo" 
    style={{ width: '20px', height: '20px', marginRight: '10px' }} 
  />
  Investments
</div></li>
            <li><div style={{ display: 'flex', alignItems: 'center',gap:'5px' }}>
  <img 
    src="\images\credit-card 1.png" 
    alt="Bank logo" 
    style={{ width: '20px', height: '20px', marginRight: '10px' }} 
  />
  Credit Cards
</div></li>
            <li><div style={{ display: 'flex', alignItems: 'center',gap:'5px' }}>
  <img 
    src="\images\loan 1.png" 
    alt="Bank logo" 
    style={{ width: '20px', height: '20px', marginRight: '10px' }} 
  />
  Loans
</div></li>
            <li><div style={{ display: 'flex', alignItems: 'center',gap:'5px' }}>
  <img 
    src="\images\service 1.png" 
    alt="Bank logo" 
    style={{ width: '20px', height: '20px', marginRight: '10px' }} 
  />Services
</div></li>
            <li><div style={{ display: 'flex', alignItems: 'center',gap:'5px' }}>
  <img 
    src="\images\econometrics 1.png" 
    alt="Bank logo" 
    style={{ width: '20px', height: '20px', marginRight: '10px' }} 
  />My priviliges
</div></li>
            <li><div style={{ display: 'flex', alignItems: 'center',gap:'5px' }}>
  <img 
    src="\images\settings solid 1.png" 
    alt="Bank logo" 
    style={{ width: '20px', height: '20px', marginRight: '10px' }} 
  />Settings
</div></li>
          </ul>
        </nav>
      </aside>

      <main className="content" >
      <header className="top-bar" style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px' ,backgroundColor:"#fff"}}>
  {/* Title */}
  <p style={{ fontSize: '30px', margin: 0 }}>Overview</p>

  {/* Search Bar */}
  <div style={{ width: '400px', height: '40px' }}></div>

  <div className="search-container" style={{ position: 'relative', display: 'inline-block', }}>
    {/* Material Icon for search */}
    <span
      className="material-icons"
      style={{
        position: 'absolute',
        left: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '16px',
      }}
    >
      search
    </span>
    
    <input
      type="text"
      
      placeholder="Search for something"
      className="search-bar"
      style={{
        backgroundColor:'lightgrey',
        width: '250px',
        height: '30px',
        paddingLeft: '30px', // Adds padding so text doesn't overlap the icon
        borderRadius: '20px',
        border: 'none',
        fontSize: '14px',
      }}
    />
  </div>

  {/* Profile & Settings Icons */}
  <div className="top-bar-icons" style={{ display: 'flex', alignItems: 'center' }}>
  <div onClick={() => console.log('Settings clicked')} style={{ marginRight: '10px', cursor: 'pointer' }}>
    <img
      src="\images\settings solid 1.png"
      alt="Settings"
      className="settings-icon"
      style={{ width: '30px', height: '30px' }}
    />
  </div>

  <div onClick={() => console.log('Group clicked')} style={{ marginRight: '10px', cursor: 'pointer' }}>
    <img
      src="\images\Group 3.png"
      alt="Group"
      className="group-icon"
      style={{ width: '30px', height: '30px' }}
    />
  </div>

  <div onClick={() => console.log('Profile clicked')} style={{ cursor: 'pointer' }}>
    <img
      src="\images\pexels-christina-morillo-1181690 1.png"
      alt="User Profile"
      className="profile-icon"
      style={{ width: '30px', height: '30px', borderRadius: '50%' }}
    />
  </div>
</div>

</header>
<div>
<div style={{padding:'10px'}}></div>
<div className="smal-bar">

            <h3 style={{paddingLeft:'25px',color:'gray'}}>My Cards</h3>
            <h4 style={{ paddingLeft: '500px',color:'gray' }}>See all</h4>
            <h3  style={{ paddingRight: '250px',color:'gray' }}>Recent Transactions</h3>
          </div>
</div>


<section className="overview-section">

<div className="card-balance">
            
<div className="card">
      <div className="balance">
        Balance
        <div className="balance-amount">$5,756</div>
      </div>
      <div className="chip">
      <img src="\images\Chip_Card@2x.png" alt="Card Icon" style={{ width: '40px',height:'35px' }} />

      </div>
      <div className="card-details">
        <div>
          Card Holder
          <br />
          <strong>Eddy Cusuma</strong>
        </div>
        <div>
          Valid Thru
          <br />
          <strong>12/22</strong>
        </div>
      </div>
      <div className="card-number">3778 **** **** 1234</div>
    </div>
          </div>
          <div className="card-balance">
            
            <div className="card-2">
                  <div className="balance-2">
                    Balance
                    <div className="balance-amount-2">$5,756</div>
                  </div>
                  <div className="chip-2">
                  <img src="\images\Chip_Card@2x.png" alt="Card Icon" style={{ width: '40px', height:'35px' }} />
                  </div>
                  <div className="card-details-2">
                    <div>
                      Card Holder
                      <br />
                      <strong>Eddy Cusuma</strong>
                    </div>
                    <div>
                      Valid Thru
                      <br />
                      <strong>12/22</strong>
                    </div>
                  </div>
                  <div className="card-number-2">3778 **** **** 1234</div>
                </div>
                      </div>
                      <div className="recent-transactions-list">
  <div className="transaction-item">
    <div className="transaction-icon" style={{ backgroundColor: '#FDE68A' }}>
      <img src="\images\Group 23.png" alt="Card Icon" style={{ width: '20px' }} />
    </div>
    <div className="transaction-details">
      <p>Deposit from my Card</p>
      <small>28 January 2021</small>
    </div>
    <div className="transaction-amount negative">-$850</div>
  </div>

  <div className="transaction-item">
    <div className="transaction-icon" style={{ backgroundColor: '#BFDBFE' }}>
      <img src="\images\Group 314.png" alt="PayPal Icon" style={{ width: '20px' }} />
    </div>
    <div className="transaction-details">
      <p>Deposit Paypal</p>
      <small>25 January 2021</small>
    </div>
    <div className="transaction-amount positive">+$2,500</div>
  </div>

  <div className="transaction-item">
    <div className="transaction-icon" style={{ backgroundColor: '#BBF7D0' }}>
      <img src="\images\Group 315.png" alt="User Icon" style={{ width: '20px' }} />
    </div>
    <div className="transaction-details">
      <p>Jemi Wilson</p>
      <small>21 January 2021</small>
    </div>
    <div className="transaction-amount positive">+$5,400</div>
  </div>
</div>

          
            <div className="weekly-activity">
  <h3>Weekly Activity</h3>
  <div style={{ width: '100%', height: '250px' }}>
    <Bar data={chartData} options={chartOptions} />
  </div>

          </div>

        
          <div className="expense-statistics">
            <h3 >Expense Statistics</h3>
            <Pie style={{width:'300px',height:'240px'}} data={pieChartData} options={pieChartOptions} />
          </div>
          
</section>

      </main>
    </div>
  );
}

export default LandingPage;
