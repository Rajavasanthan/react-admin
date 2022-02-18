import React from "react";
import Card from "./Card";

function Dashboard() {
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div class="row">
                <Card border="border-left-primary" icon="fa-calendar"></Card>
                <Card border="border-left-success" icon="fa-dollar-sign"></Card>
                <Card border="border-left-info" icon="fa-clipboard-list"></Card>
                <Card border="border-left-warning" icon="fa-comments"></Card>
            </div>
        </>
    )
}

export default Dashboard;