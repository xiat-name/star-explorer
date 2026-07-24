// ── 多维表格链接 ──
const BITABLE_URLS = {
    ranking: 'https://mi.feishu.cn/base/Q8VLbh9P6ablLxsHxrzcOsJanVu?table=tblGsUTzHMYFVdb8&view=vew2KV2mXT',
    works: 'https://mi.feishu.cn/base/Q8VLbh9P6ablLxsHxrzcOsJanVu?table=tblFNVDxXljOLJl0',
};

// ── 内嵌数据（从多维表格同步） ──
const rankingData = {
  "total": [
    {"rank":1,"name":"张三","dept2":"家用空调部","dept3":"产品部","score":30},
    {"rank":2,"name":"李四","dept2":"洗衣机部","dept3":"产品部","score":30},
    {"rank":3,"name":"王麻子","dept2":"冰箱部","dept3":"产品部","score":30},
    {"rank":4,"name":"赵六","dept2":"家用空调部","dept3":"市场营销","score":28},
    {"rank":5,"name":"钱七","dept2":"中央空调部","dept3":"产品规划","score":26},
    {"rank":6,"name":"孙八","dept2":"冰箱部","dept3":"供应链","score":24},
    {"rank":7,"name":"周九","dept2":"洗衣机部","dept3":"质量管理","score":22},
    {"rank":8,"name":"吴十","dept2":"家用空调部","dept3":"技术支持","score":20},
    {"rank":9,"name":"郑十一","dept2":"中央空调部","dept3":"售后服务","score":18},
    {"rank":10,"name":"冯十二","dept2":"冰箱部","dept3":"工业设计","score":16}
  ],
  "knowledge": [
    {"rank":1,"name":"王麻子","dept2":"冰箱部","dept3":"产品部","score":3},
    {"rank":2,"name":"赵六","dept2":"家用空调部","dept3":"市场营销","score":3},
    {"rank":3,"name":"李四","dept2":"洗衣机部","dept3":"产品部","score":2},
    {"rank":4,"name":"钱七","dept2":"中央空调部","dept3":"产品规划","score":2},
    {"rank":5,"name":"周九","dept2":"洗衣机部","dept3":"质量管理","score":2},
    {"rank":6,"name":"郑十一","dept2":"中央空调部","dept3":"售后服务","score":2},
    {"rank":7,"name":"张三","dept2":"家用空调部","dept3":"产品部","score":1},
    {"rank":8,"name":"孙八","dept2":"冰箱部","dept3":"供应链","score":1},
    {"rank":9,"name":"吴十","dept2":"家用空调部","dept3":"技术支持","score":1},
    {"rank":10,"name":"冯十二","dept2":"冰箱部","dept3":"工业设计","score":1}
  ],
  "store": [
    {"rank":1,"name":"王麻子","dept2":"冰箱部","dept3":"产品部","score":3},
    {"rank":2,"name":"赵六","dept2":"家用空调部","dept3":"市场营销","score":3},
    {"rank":3,"name":"张三","dept2":"家用空调部","dept3":"产品部","score":2},
    {"rank":4,"name":"孙八","dept2":"冰箱部","dept3":"供应链","score":2},
    {"rank":5,"name":"钱七","dept2":"中央空调部","dept3":"产品规划","score":2},
    {"rank":6,"name":"李四","dept2":"洗衣机部","dept3":"产品部","score":1},
    {"rank":7,"name":"周九","dept2":"洗衣机部","dept3":"质量管理","score":1},
    {"rank":8,"name":"吴十","dept2":"家用空调部","dept3":"技术支持","score":1},
    {"rank":9,"name":"郑十一","dept2":"中央空调部","dept3":"售后服务","score":1},
    {"rank":10,"name":"冯十二","dept2":"冰箱部","dept3":"工业设计","score":1}
  ],
  "lab": [
    {"rank":1,"name":"王麻子","dept2":"冰箱部","dept3":"产品部","score":3},
    {"rank":2,"name":"钱七","dept2":"中央空调部","dept3":"产品规划","score":3},
    {"rank":3,"name":"李四","dept2":"洗衣机部","dept3":"产品部","score":2},
    {"rank":4,"name":"赵六","dept2":"家用空调部","dept3":"市场营销","score":2},
    {"rank":5,"name":"孙八","dept2":"冰箱部","dept3":"供应链","score":2},
    {"rank":6,"name":"吴十","dept2":"家用空调部","dept3":"技术支持","score":2},
    {"rank":7,"name":"张三","dept2":"家用空调部","dept3":"产品部","score":1},
    {"rank":8,"name":"周九","dept2":"洗衣机部","dept3":"质量管理","score":1},
    {"rank":9,"name":"郑十一","dept2":"中央空调部","dept3":"售后服务","score":1},
    {"rank":10,"name":"冯十二","dept2":"冰箱部","dept3":"工业设计","score":1}
  ],
  "factory": [
    {"rank":1,"name":"王麻子","dept2":"冰箱部","dept3":"产品部","score":3},
    {"rank":2,"name":"周九","dept2":"洗衣机部","dept3":"质量管理","score":3},
    {"rank":3,"name":"张三","dept2":"家用空调部","dept3":"产品部","score":2},
    {"rank":4,"name":"赵六","dept2":"家用空调部","dept3":"市场营销","score":2},
    {"rank":5,"name":"孙八","dept2":"冰箱部","dept3":"供应链","score":2},
    {"rank":6,"name":"吴十","dept2":"家用空调部","dept3":"技术支持","score":2},
    {"rank":7,"name":"李四","dept2":"洗衣机部","dept3":"产品部","score":1},
    {"rank":8,"name":"钱七","dept2":"中央空调部","dept3":"产品规划","score":1},
    {"rank":9,"name":"郑十一","dept2":"中央空调部","dept3":"售后服务","score":1},
    {"rank":10,"name":"冯十二","dept2":"冰箱部","dept3":"工业设计","score":1}
  ],
  "product": [
    {"rank":1,"name":"孙八","dept2":"冰箱部","dept3":"供应链","score":3},
    {"rank":2,"name":"张三","dept2":"家用空调部","dept3":"产品部","score":3},
    {"rank":3,"name":"李四","dept2":"洗衣机部","dept3":"产品部","score":2},
    {"rank":4,"name":"赵六","dept2":"家用空调部","dept3":"市场营销","score":2},
    {"rank":5,"name":"钱七","dept2":"中央空调部","dept3":"产品规划","score":2},
    {"rank":6,"name":"吴十","dept2":"家用空调部","dept3":"技术支持","score":2},
    {"rank":7,"name":"王麻子","dept2":"冰箱部","dept3":"产品部","score":1},
    {"rank":8,"name":"周九","dept2":"洗衣机部","dept3":"质量管理","score":1},
    {"rank":9,"name":"郑十一","dept2":"中央空调部","dept3":"售后服务","score":1},
    {"rank":10,"name":"冯十二","dept2":"冰箱部","dept3":"工业设计","score":1}
  ]
};

const worksRecords = [
  {"author":"张雅云","stage":"星知识","taskName":"学习心得","link":"https://mi.feishu.cn/docx/VvAnd3Z5Eop8DPxHre5cunkwnDd","linkText":"张雅云—大家电部门训学习笔记—DAY 01"},
  {"author":"李四","stage":"星知识","taskName":"理论知识学习总结","link":"https://mi.feishu.cn/docx/VvAnd3Z5Eop8DPxHre5cunkwnDd","linkText":"李四—星知识学习心得—产品线梳理"},
  {"author":"王麻子","stage":"星卖场","taskName":"门店用户洞察报告","link":"https://mi.feishu.cn/docx/VvAnd3Z5Eop8DPxHre5cunkwnDd","linkText":"王麻子—武汉门店用户洞察报告"},
  {"author":"赵六","stage":"星研所","taskName":"实验室出站报告","link":"https://mi.feishu.cn/docx/VvAnd3Z5Eop8DPxHre5cunkwnDd","linkText":"赵六—实验室出站报告—压缩机测试"}
];

// ── 初始化 ──
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initPlanetExplorer();
    initPlanetLinks();
    initNavHighlight();
    initRankingTabs();
    renderBoard('total');
    renderWorks();
});

// ── 渲染排行榜 ──
function renderBoard(board) {
    const body = document.getElementById('rankingBody');
    if (!body) return;
    const data = rankingData[board] || [];
    if (data.length === 0) {
        body.innerHTML = '<div style="text-align:center;padding:24px;color:#888;">暂无数据</div>';
        return;
    }
    body.innerHTML = data.map(item => `
        <div class="ranking-row">
            <span class="rank-col ${item.rank <= 3 ? 'rank-' + item.rank : ''}">
                ${item.rank <= 3 ? ['🥇', '🥈', '🥉'][item.rank - 1] : item.rank}
            </span>
            <span class="name-col">${item.name}</span>
            <span class="dept2-col">${item.dept2}</span>
            <span class="dept3-col">${item.dept3}</span>
            <span class="score-col">${item.score}</span>
        </div>
    `).join('');
}

// ── 排行榜 Tab 切换 ──
function initRankingTabs() {
    const tabs = document.querySelectorAll('.ranking-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderBoard(tab.dataset.board);
        });
    });
}

// ── 渲染优秀作业 ──
function renderWorks() {
    const container = document.getElementById('worksBoard');
    if (!container) return;
    if (worksRecords.length === 0) {
        container.innerHTML = `
            <div class="works-coming-soon">
                <div class="coming-soon-icon"></div>
                <div class="coming-soon-text">敬 请 期 待</div>
                <div class="coming-soon-sub">优秀作业即将揭晓，期待你的精彩表现！</div>
            </div>
        `;
        return;
    }
    container.innerHTML = worksRecords.map(work => `
        <div class="work-detail-card">
            <div class="work-detail-name">⭐ ${work.author}</div>
            <div class="work-detail-row"><span class="work-detail-label">培养环节：</span>${work.stage}</div>
            <div class="work-detail-row"><span class="work-detail-label">作业内容：</span>${work.taskName}</div>
            <div class="work-detail-row">
                <span class="work-detail-label">作业链接：</span>
                <a href="${work.link}" target="_blank" rel="noopener noreferrer" style="color:#00b4ff;text-decoration:underline;">
                    ${work.linkText || '查看作业'}
                </a>
            </div>
        </div>
    `).join('');
}

// ── 导航滚动 ──
function initNav() {
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// ── 星球探索分栏切换 ──
function initPlanetExplorer() {
    const btns = document.querySelectorAll('.planet-nav-btn');
    const panels = document.querySelectorAll('.planet-panel');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            panels.forEach(p => p.classList.remove('active'));
            document.getElementById('panel-' + btn.dataset.target).classList.add('active');
        });
    });
}

// ── 项目介绍中的星球卡片点击跳转 ──
function initPlanetLinks() {
    document.querySelectorAll('.planet-item[data-planet]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const planet = item.dataset.planet;
            document.querySelectorAll('.planet-nav-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.planet-panel').forEach(p => p.classList.remove('active'));
            const targetBtn = document.querySelector(`.planet-nav-btn[data-target="${planet}"]`);
            const targetPanel = document.getElementById('panel-' + planet);
            if (targetBtn) targetBtn.classList.add('active');
            if (targetPanel) targetPanel.classList.add('active');
            document.getElementById('planets').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// ── 导航高亮 ──
function initNavHighlight() {
    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 120) current = section.id;
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === current);
        });
    });
}
