"use client";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import { Users, Globe, Activity, MapPin, RefreshCw } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/analytics");
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error("Failed to fetch analytics:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-lg">Loading analytics...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-500">Failed to load analytics data</p>
          <button
            onClick={fetchData}
            className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const countryChartData = {
    labels: data.countries.slice(0, 10).map((c) => c._id || "Unknown"),
    datasets: [
      {
        label: "Visitors",
        data: data.countries.slice(0, 10).map((c) => c.count),
        backgroundColor: "rgba(234, 179, 8, 0.8)",
        borderColor: "rgba(234, 179, 8, 1)",
        borderWidth: 1,
      },
    ],
  };

  const cityChartData = {
    labels: data.cities.slice(0, 10).map((c) => c._id || "Unknown"),
    datasets: [
      {
        label: "Visitors",
        data: data.cities.slice(0, 10).map((c) => c.count),
        backgroundColor: "rgba(59, 130, 246, 0.8)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
      },
    ],
  };

  const historyChartData = {
    labels: data.recentViews.map((v) => v._id),
    datasets: [
      {
        label: "Daily Views",
        data: data.recentViews.map((v) => v.count),
        borderColor: "rgba(16, 185, 129, 1)",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "rgba(16, 185, 129, 1)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        labels: {
          color: "#a1a1a1",
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#a1a1a1",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      x: {
        ticks: {
          color: "#a1a1a1",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-500">
            📊 Analytics Dashboard
          </h1>
          <button
            onClick={fetchData}
            className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition"
          >
            <RefreshCw size={18} />
            Refresh
          </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-yellow-500/50 transition">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-500/10 rounded-lg">
                <Users className="text-yellow-500" size={28} />
              </div>
              <div>
                <p className="text-zinc-400 text-sm">Total Visitors</p>
                <p className="text-3xl font-bold text-white">
                  {data.totalVisitors}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-blue-500/50 transition">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Globe className="text-blue-500" size={28} />
              </div>
              <div>
                <p className="text-zinc-400 text-sm">Top Country</p>
                <p className="text-3xl font-bold text-white">
                  {data.countries[0]?._id || "N/A"}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-green-500/50 transition">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-500/10 rounded-lg">
                <Activity className="text-green-500" size={28} />
              </div>
              <div>
                <p className="text-zinc-400 text-sm">Latest Day Views</p>
                <p className="text-3xl font-bold text-white">
                  {data.recentViews.length > 0
                    ? data.recentViews[data.recentViews.length - 1].count
                    : 0}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
              <Globe size={20} className="text-blue-500" /> Visitors by Country
            </h2>
            <div className="h-80">
              <Bar data={countryChartData} options={chartOptions} />
            </div>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
              <Activity size={20} className="text-green-500" /> Traffic History
              (7 Days)
            </h2>
            <div className="h-80">
              <Line data={historyChartData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* Cities Chart */}
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
            <MapPin size={20} className="text-purple-500" /> Top Cities
          </h2>
          <div className="h-80">
            <Bar data={cityChartData} options={chartOptions} />
          </div>
        </div>

        {/* Recent Visitors Table */}
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
          <h2 className="text-xl font-semibold mb-4 text-white">
            📍 Visitor Details
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="text-left py-3 px-4 text-zinc-400">Country</th>
                  <th className="text-left py-3 px-4 text-zinc-400">City</th>
                  <th className="text-left py-3 px-4 text-zinc-400">Region</th>
                  <th className="text-left py-3 px-4 text-zinc-400">Visitors</th>
                </tr>
              </thead>
              <tbody>
                {data.countries.slice(0, 10).map((country, idx) => (
                  <tr key={idx} className="border-b border-zinc-800 hover:bg-zinc-800/50">
                    <td className="py-3 px-4 text-white">{country._id}</td>
                    <td className="py-3 px-4 text-zinc-300">
                      {data.cities[idx]?._id || "-"}
                    </td>
                    <td className="py-3 px-4 text-zinc-300">-</td>
                    <td className="py-3 px-4 font-semibold text-yellow-500">
                      {country.count}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
