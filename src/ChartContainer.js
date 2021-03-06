import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import autocolors from 'chartjs-plugin-autocolors';
Chart.register(autocolors);

const ChartContainer = (props) => {
  const pageVisits = {
    keys: Object.keys(props.pageViewData),
    values: Object.values(props.pageViewData)
  }

  const hoursView = {
    keys: Object.keys(props.hoursViewData),
    values: Object.values(props.hoursViewData)
  }

  const userView = {
    keys: Object.keys(props.userViewData),
    values: Object.values(props.userViewData)
  }

  const GraphDataForPageVisits = {
    labels: pageVisits.keys,
    datasets: [{
      label: 'Most site visits on 2022-01-01',
      data: pageVisits.values,
      borderWidth: 1
    }]
  }

  const GraphDataForHourVisits = {
    labels: hoursView.keys,
    datasets: [{
      label: 'Time period of visit',
      data: hoursView.values,
      borderWidth: 1
    }]
  }

  const GraphDataForUserView = {
    labels: userView.keys,
    datasets: [{
      label: 'No. of page visit per user',
      data: userView.values,
      borderWidth: 1
    }]
  }

  const renderBarChart = () => {
    const activeTab = props.activeTab;
    const visualisationTab = props.visualisationTab;

    if(activeTab === 1) {
      if(visualisationTab===1) {
        return <Bar 
          data={GraphDataForPageVisits}
          options={{
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'No. of visits',
                  color: '#000'
                }
              },
              x: {
                title: {
                  display: true,
                  text: 'Pages',
                  color: '#000'
                }
              }
            },
            plugins: {
              autocolors: {
                enabled: true,
                mode: 'data'
              }
            }
          }}
        />
      }
      else if(visualisationTab===2) {
        return (
        <div className='chart-container pie-chart'>
          <Pie
            data={GraphDataForPageVisits}
            options={{
              plugins: {
                autocolors: {
                  enabled: true,
                  mode: 'data'
                }
              }
            }}
          />
        </div>
        )
      }
    }
    else if(activeTab === 2) {
      if(visualisationTab===1) {
        return <Bar 
        data={GraphDataForHourVisits}
        options={{
          scales: {
            y: {
              title: {
                display: true,
                text: 'No. of users',
                color: '#000'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Time period of visit',
                color: '#000'
              }
            }
          },
          plugins: {
            autocolors: {
              enabled: true,
              mode: 'data'
            }
          }
        }}
      />
      }
    }
    else if(activeTab === 3) {
      if(visualisationTab===1) {
        return <Bar 
        data={GraphDataForUserView}
        options={{
          scales: {
            y: {
              title: {
                display: true,
                text: 'No. of visits',
                color: '#000'
              }
            },
            x: {
              title: {
                display: true,
                text: 'User ID',
                color: '#000'
              }
            }
          },
          plugins: {
            autocolors: {
              enabled: true,
              mode: 'data'
            }
          }
        }}
      />
      }
    }
  }

  return (
    <div className='chart-container'>
      {renderBarChart()}
    </div>
  )
}

export default ChartContainer