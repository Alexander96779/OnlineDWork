/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import Sidebar from '../../components/Sidebar';
import {
dashboardShippedProductsChart,
dashboardAllProductsChart,
dashboard24HoursPerformanceChart
} from '../../utils/variables';

class Dashboard extends Component {
    render() {
        return(
<div className="wrapper">
    <div className="main-panel" id="main-panel">
        <Sidebar { ...this.props }/>
        <div className="content">
        <div className="row">
          <div className="col-lg-4">
            <div className="card card-chart">
              <div className="card-header">
                <h5 className="card-category">All my jobs</h5>
                <h4 className="card-title">Accepted jobs</h4>
                <div className="dropdown">
                  <button type="button" className="btn btn-round btn-outline-default dropdown-toggle btn-simple btn-icon no-caret" data-toggle="dropdown">
                    <i className="now-ui-icons loader_gear"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <a className="dropdown-item text-danger" href="#">Remove Data</a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="chart-area">
                <Line
                    data={dashboardShippedProductsChart.data}
                    options={dashboardShippedProductsChart.options}
                    />
                </div>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="now-ui-icons arrows-1_refresh-69"></i> Just Updated
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card card-chart">
              <div className="card-header">
                <h5 className="card-category">2020 Notifications</h5>
                <h4 className="card-title">All notifications</h4>
                <div className="dropdown">
                  <button type="button" className="btn btn-round btn-outline-default dropdown-toggle btn-simple btn-icon no-caret" data-toggle="dropdown">
                    <i className="now-ui-icons loader_gear"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <a className="dropdown-item text-danger" href="#">Remove Data</a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="chart-area">
                <Line
                    data={dashboardAllProductsChart.data}
                    options={dashboardAllProductsChart.options}
                />
                </div>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="now-ui-icons arrows-1_refresh-69"></i> Just Updated
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card card-chart">
              <div className="card-header">
                <h5 className="card-category">Email Statistics</h5>
                <h4 className="card-title">24 Hours Performance</h4>
              </div>
              <div className="card-body">
                <div className="chart-area">
                <Bar
                    data={dashboard24HoursPerformanceChart.data}
                    options={dashboard24HoursPerformanceChart.options}
                />
                </div>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="now-ui-icons ui-2_time-alarm"></i> Last 7 days
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
</div>
        );
    }
}

export default Dashboard;