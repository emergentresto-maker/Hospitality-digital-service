import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  LineChart,
  Line,
  PieChart,
  Pie,
} from 'recharts';
import {
  Filter,
  PieChart as PieChartIcon,
  TrendingUp,
  Layers,
  Info,
  ArrowRight,
} from 'lucide-react';
import {
  ANALYTICS_DISCLAIMER_NOTE,
  customerEnquiryFunnelData,
  trafficSourceData,
  monthlyEnquiryTrendData,
  conversionFunnelData,
} from '../data/analyticsDemo';
import { Section, SectionHeading, Card, IconBox } from '../components';

const tooltipContentStyle: React.CSSProperties = {
  backgroundColor: '#15120F',
  borderColor: 'rgba(244, 185, 66, 0.35)',
  borderRadius: '0.75rem',
  color: '#F5F1EA',
  fontSize: '12px',
  padding: '10px 14px',
  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
};

const tooltipLabelStyle: React.CSSProperties = {
  color: '#F4B942',
  fontWeight: 600,
  marginBottom: '4px',
};

export const AnalyticsSection: React.FC = () => {
  return (
    <Section
      id="analytics"
      spacing="lg"
      surface="secondary"
      className="scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <SectionHeading
          kicker="Hospitality Growth Intelligence"
          title="Understand Your Guests. Grow Your Business."
          subtitle="Visualizing how travelers discover your hotel or restaurant online, engage via WhatsApp, and convert into direct bookings."
        />

        {/* Visible Demonstration Data Note */}
        <div className="max-w-md rounded-xl bg-[#15120F] border border-[#F4B942]/25 p-4 flex items-start gap-3">
          <Info className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5" />
          <p className="text-xs text-[#C8BFB3] leading-relaxed">
            {ANALYTICS_DISCLAIMER_NOTE}
          </p>
        </div>
      </div>

      {/* Responsive Visualizations Grid (Stacks vertically on mobile, 2x2 on desktop) */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* CHART 1: Customer Enquiry Funnel */}
        <Card className="p-5 sm:p-7 flex flex-col justify-between min-w-0">
          <div>
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex items-center gap-3 min-w-0">
                <IconBox icon={Filter} size="md" variant="gold" />
                <div className="min-w-0">
                  <span className="font-mono text-xs text-[#F4B942] tabular-nums">
                    01 · Guest Journey Model
                  </span>
                  <h3 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#F5F1EA] break-words">
                    Customer Enquiry Funnel
                  </h3>
                </div>
              </div>
              <span className="text-[11px] font-mono text-[#A69B8D] shrink-0">
                Demo Sample
              </span>
            </div>

            {/* Visual Stage Path Flow */}
            <div className="mb-4 p-3 rounded-lg bg-[#15120F] border border-[#F4B942]/12 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-[#C8BFB3]">
              {customerEnquiryFunnelData.map((item, idx) => (
                <React.Fragment key={item.stage}>
                  <span className="font-medium text-[#F5F1EA]">{item.stage}</span>
                  {idx < customerEnquiryFunnelData.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-[#F4B942] shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Recharts Horizontal Funnel Bar Chart (Optimized for 320px+ width) */}
            <div className="h-[240px] sm:h-[260px] w-full min-w-0">
              <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                <BarChart
                  data={customerEnquiryFunnelData}
                  layout="vertical"
                  margin={{ top: 4, right: 12, left: 0, bottom: 4 }}
                >
                  <CartesianGrid
                    stroke="rgba(244, 185, 66, 0.1)"
                    horizontal={false}
                  />
                  <XAxis
                    type="number"
                    stroke="#A69B8D"
                    fontSize={10}
                    tickLine={false}
                    axisLine={{ stroke: 'rgba(244, 185, 66, 0.18)' }}
                  />
                  <YAxis
                    type="category"
                    dataKey="shortLabel"
                    width={92}
                    stroke="#F5F1EA"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    cursor={{ fill: 'rgba(244, 185, 66, 0.06)' }}
                    contentStyle={tooltipContentStyle}
                    labelStyle={tooltipLabelStyle}
                    formatter={(value) => [
                      `${Number(value ?? 0).toLocaleString()} illustrative users`,
                      'Stage Volume',
                    ]}
                  />
                  <Bar dataKey="users" radius={[0, 6, 6, 0]} barSize={22}>
                    {customerEnquiryFunnelData.map((entry) => (
                      <Cell key={entry.stage} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* 5-Stage Customer Enquiry Funnel Tabular Strip */}
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-5 gap-2">
              {customerEnquiryFunnelData.map((item) => (
                <div
                  key={item.stage}
                  className="p-2 rounded-lg bg-[#15120F] border border-[#F4B942]/12"
                >
                  <p className="text-[10px] text-[#A69B8D] truncate">{item.stage}</p>
                  <div className="mt-0.5 flex items-baseline justify-between gap-1">
                    <span className="font-mono text-xs font-semibold text-[#F5F1EA] tabular-nums">
                      {item.users.toLocaleString()}
                    </span>
                    <span className="font-mono text-[10px] text-[#F4B942] tabular-nums">
                      {item.retentionRate}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 pt-3 border-t border-[#F4B942]/12 text-[11px] text-[#A69B8D]">
            Tracks how initial Google searches progress through website visits and WhatsApp clicks into confirmed bookings.
          </p>
        </Card>

        {/* CHART 2: Traffic Source Chart */}
        <Card className="p-5 sm:p-7 flex flex-col justify-between min-w-0">
          <div>
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex items-center gap-3 min-w-0">
                <IconBox icon={PieChartIcon} size="md" variant="gold" />
                <div className="min-w-0">
                  <span className="font-mono text-xs text-[#F4B942] tabular-nums">
                    02 · Channel Acquisition Mix
                  </span>
                  <h3 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#F5F1EA] break-words">
                    Traffic Source Chart
                  </h3>
                </div>
              </div>
              <span className="text-[11px] font-mono text-[#A69B8D] shrink-0">
                Demo Sample
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              {/* Recharts Donut Chart */}
              <div className="md:col-span-6 h-[220px] sm:h-[250px] w-full min-w-0">
                <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                  <PieChart>
                    <Pie
                      data={trafficSourceData}
                      dataKey="share"
                      nameKey="source"
                      cx="50%"
                      cy="50%"
                      innerRadius={48}
                      outerRadius={78}
                      paddingAngle={3}
                      stroke="#211B16"
                      strokeWidth={2}
                    >
                      {trafficSourceData.map((entry) => (
                        <Cell key={entry.source} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={tooltipContentStyle}
                      labelStyle={tooltipLabelStyle}
                      formatter={(value, name) => {
                        const label = String(name ?? '');
                        const visits =
                          trafficSourceData.find((d) => d.source === label)?.visitors ?? 0;
                        return [`${Number(value ?? 0)}% (${visits} visits)`, label];
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Channel Breakdown Legend */}
              <div className="md:col-span-6 space-y-2">
                {trafficSourceData.map((item) => (
                  <div
                    key={item.source}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#15120F] border border-[#F4B942]/12 text-xs"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className="w-3 h-3 rounded-sm shrink-0"
                        style={{ backgroundColor: item.fill }}
                        aria-hidden="true"
                      />
                      <span className="text-[#F5F1EA] font-medium truncate">
                        {item.source}
                      </span>
                    </div>
                    <span className="font-mono text-[#F4B942] font-semibold tabular-nums shrink-0 ml-2">
                      {item.share}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-4 pt-3 border-t border-[#F4B942]/12 text-[11px] text-[#A69B8D]">
            Illustrates balanced hospitality traffic across Google Organic, Google Ads, Meta Ads, Social Media, and Direct Traffic.
          </p>
        </Card>

        {/* CHART 3: Monthly Enquiry Trend */}
        <Card className="p-5 sm:p-7 flex flex-col justify-between min-w-0">
          <div>
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex items-center gap-3 min-w-0">
                <IconBox icon={TrendingUp} size="md" variant="gold" />
                <div className="min-w-0">
                  <span className="font-mono text-xs text-[#F4B942] tabular-nums">
                    03 · Six-Month Trajectory
                  </span>
                  <h3 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#F5F1EA] break-words">
                    Monthly Enquiry Trend
                  </h3>
                </div>
              </div>
              <span className="text-[11px] font-mono text-[#A69B8D] shrink-0">
                6-Month Demo
              </span>
            </div>

            <div className="mb-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#C8BFB3]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-0.5 bg-[#FFBF47] inline-block" />
                <span>Total Guest Enquiries</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-0.5 bg-[#C8BFB3] inline-block" />
                <span>WhatsApp &amp; Direct Calls</span>
              </div>
            </div>

            {/* Recharts Line Chart */}
            <div className="h-[240px] sm:h-[260px] w-full min-w-0">
              <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                <LineChart
                  data={monthlyEnquiryTrendData}
                  margin={{ top: 8, right: 12, left: -16, bottom: 6 }}
                >
                  <CartesianGrid
                    stroke="rgba(244, 185, 66, 0.1)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="month"
                    stroke="#C8BFB3"
                    fontSize={11}
                    tickLine={false}
                    axisLine={{ stroke: 'rgba(244, 185, 66, 0.18)' }}
                  />
                  <YAxis
                    stroke="#A69B8D"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={tooltipContentStyle}
                    labelStyle={tooltipLabelStyle}
                  />
                  <Line
                    type="monotone"
                    dataKey="enquiries"
                    name="Total Enquiries"
                    stroke="#FFBF47"
                    strokeWidth={2.75}
                    dot={{ r: 3.5, fill: '#FFBF47', stroke: '#15120F', strokeWidth: 2 }}
                    activeDot={{ r: 5.5, fill: '#F4B942' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="directCallsAndWhatsApp"
                    name="WhatsApp & Calls"
                    stroke="#C8BFB3"
                    strokeWidth={2}
                    strokeDasharray="4 4"
                    dot={{ r: 3, fill: '#C8BFB3', stroke: '#15120F', strokeWidth: 1.5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <p className="mt-4 pt-3 border-t border-[#F4B942]/12 text-[11px] text-[#A69B8D]">
            Illustrative six-month enquiry growth curve as SEO, Google Business optimization, and ad campaigns compound.
          </p>
        </Card>

        {/* CHART 4: Conversion Funnel */}
        <Card className="p-5 sm:p-7 flex flex-col justify-between min-w-0">
          <div>
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex items-center gap-3 min-w-0">
                <IconBox icon={Layers} size="md" variant="gold" />
                <div className="min-w-0">
                  <span className="font-mono text-xs text-[#F4B942] tabular-nums">
                    04 · Lead-to-Booking Pipeline
                  </span>
                  <h3 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#F5F1EA] break-words">
                    Conversion Funnel
                  </h3>
                </div>
              </div>
              <span className="text-[11px] font-mono text-[#A69B8D] shrink-0">
                Demo Sample
              </span>
            </div>

            {/* Recharts Vertical Column Chart */}
            <div className="h-[220px] sm:h-[240px] w-full min-w-0">
              <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                <BarChart
                  data={conversionFunnelData}
                  margin={{ top: 8, right: 10, left: -16, bottom: 6 }}
                >
                  <CartesianGrid
                    stroke="rgba(244, 185, 66, 0.1)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="stage"
                    stroke="#F5F1EA"
                    fontSize={11}
                    tickLine={false}
                    axisLine={{ stroke: 'rgba(244, 185, 66, 0.18)' }}
                  />
                  <YAxis
                    stroke="#A69B8D"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    cursor={{ fill: 'rgba(244, 185, 66, 0.06)' }}
                    contentStyle={tooltipContentStyle}
                    labelStyle={tooltipLabelStyle}
                    formatter={(value) => [
                      `${Number(value ?? 0).toLocaleString()} illustrative count`,
                      'Volume',
                    ]}
                  />
                  <Bar dataKey="count" radius={[6, 6, 0, 0]} barSize={36}>
                    {conversionFunnelData.map((entry) => (
                      <Cell key={entry.stage} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Stage Breakdown Summary Row */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {conversionFunnelData.map((item) => (
                <div
                  key={item.stage}
                  className="p-2.5 rounded-lg bg-[#15120F] border border-[#F4B942]/12"
                >
                  <p className="text-[11px] text-[#A69B8D] truncate">{item.stage}</p>
                  <div className="mt-1 flex items-baseline justify-between gap-1">
                    <span className="font-mono text-xs sm:text-sm font-semibold text-[#F5F1EA] tabular-nums">
                      {item.count.toLocaleString()}
                    </span>
                    <span className="font-mono text-[10px] sm:text-[11px] text-[#F4B942] tabular-nums">
                      {item.conversionRate}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 pt-3 border-t border-[#F4B942]/12 text-[11px] text-[#A69B8D]">
            Breaks down how website Visitors convert into Enquiries, Qualified Leads, and confirmed direct Bookings.
          </p>
        </Card>
      </div>

      {/* Bottom Full-Width Visible Disclaimer Banner */}
      <div className="mt-8 rounded-xl bg-[#15120F] border border-[#F4B942]/20 px-4 py-4 sm:px-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#C8BFB3]">
        <div className="flex items-start sm:items-center gap-2.5">
          <Info className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5 sm:mt-0" />
          <span className="font-medium text-[#F5F1EA]">{ANALYTICS_DISCLAIMER_NOTE}</span>
        </div>
        <span className="font-mono text-[11px] text-[#A69B8D] shrink-0">
          Demonstration Model · Non-Client Data
        </span>
      </div>
    </Section>
  );
};
