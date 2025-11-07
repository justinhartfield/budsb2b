import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import numpy as np

# Set style
plt.style.use('seaborn-v0_8-darkgrid')

# User Segmentation Chart
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 6))

# Data
tiers = ['Buds Pro\n(Top 10%)', 'Buds Standard', 'Buds Basic']
users = [765, 885, 5078]
gmv = [1441889, 622617, 859483]
colors = ['#FFD700', '#4169E1', '#808080']

# Chart 1: Users Distribution
ax1.pie(users, labels=tiers, autopct='%1.1f%%', colors=colors, startangle=90, textprops={'fontsize': 12, 'weight': 'bold'})
ax1.set_title('User Distribution\n(Total: 6,728 users)', fontsize=14, weight='bold', pad=20)

# Chart 2: GMV Distribution
ax2.pie(gmv, labels=tiers, autopct='%1.1f%%', colors=colors, startangle=90, textprops={'fontsize': 12, 'weight': 'bold'})
ax2.set_title('GMV Distribution\n(Total: €2.92M)', fontsize=14, weight='bold', pad=20)

plt.suptitle('Data-Driven User Segmentation (Weed.de)', fontsize=16, weight='bold', y=1.02)
plt.tight_layout()
plt.savefig('/home/ubuntu/budsb2b/public/user_segmentation_chart.png', dpi=300, bbox_inches='tight', facecolor='white')
plt.close()

# Financial Impact Chart
fig, ax = plt.subplots(figsize=(12, 7))

# Data
models = ['Standard Coalition\nModel', 'Buds Pro\nModel']
revenue_streams = {
    'Point Markup': [500000, 500000],
    'Redemption Profit': [800000, 800000],
    'Partner Fees': [2000000, 2000000],
    'Buds Pro Revenue': [0, 3100000]
}

# Colors
colors_dict = {
    'Point Markup': '#90EE90',
    'Redemption Profit': '#87CEEB',
    'Partner Fees': '#FFB6C1',
    'Buds Pro Revenue': '#FFD700'
}

# Create stacked bar chart
bottom = np.zeros(2)
for revenue_type, values in revenue_streams.items():
    ax.bar(models, values, bottom=bottom, label=revenue_type, color=colors_dict[revenue_type], edgecolor='white', linewidth=2)
    bottom += values

# Add total revenue labels on top
totals = [3300000, 6400000]
for i, total in enumerate(totals):
    ax.text(i, total + 100000, f'€{total/1000000:.1f}M', ha='center', va='bottom', fontsize=14, weight='bold')

# Add percentage increase annotation
ax.annotate('+94% INCREASE', xy=(1, 6400000), xytext=(0.5, 5500000),
            arrowprops=dict(arrowstyle='->', lw=2, color='green'),
            fontsize=14, weight='bold', color='green',
            bbox=dict(boxstyle='round,pad=0.5', facecolor='lightgreen', edgecolor='green', linewidth=2))

ax.set_ylabel('Annual Revenue (€)', fontsize=12, weight='bold')
ax.set_title('Financial Impact: Buds Pro Nearly Doubles Total Company Revenue', fontsize=16, weight='bold', pad=20)
ax.legend(loc='upper left', fontsize=11)
ax.set_ylim(0, 7000000)
ax.yaxis.set_major_formatter(plt.FuncFormatter(lambda x, p: f'€{x/1000000:.1f}M'))
ax.grid(axis='y', alpha=0.3)

plt.tight_layout()
plt.savefig('/home/ubuntu/budsb2b/public/financial_impact_chart.png', dpi=300, bbox_inches='tight', facecolor='white')
plt.close()

print("Charts generated successfully!")
