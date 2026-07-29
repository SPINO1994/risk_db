const ENTITIES = [
    {
        key: 'assets',
        title: 'Aktiv uçotu',
        api: '/api/assets',
        fields: [
            { name: 'category', label: 'Kateqoriya', type: 'text' },
            { name: 'name', label: 'Ad', type: 'text' },
            { name: 'ownerWorkerId', label: 'Sahib işçi', type: 'autocomplete', refApi: '/api/employees', refIdField: 'id', refLabelField: 'fullName', transientName: 'ownerWorkerName' },
            { name: 'responsibleWorkerId', label: 'Məsul işçi', type: 'autocomplete', refApi: '/api/employees', refIdField: 'id', refLabelField: 'fullName', transientName: 'responsibleWorkerName' },
            { name: 'qualitativeValue', label: 'Keyfiyyət dəyəri', type: 'text' },
            { name: 'quantitativeValue', label: 'Kəmiyyət dəyəri', type: 'number' },
            { name: 'currency', label: 'Valyuta', type: 'text' },
            { name: 'status', label: 'Status', type: 'text' },
            { name: 'note', label: 'Qeyd', type: 'textarea' }
        ]
    },
    {
        key: 'roles',
        title: 'Rollar siyahısı',
        api: '/api/roles',
        fields: [
            { name: 'category', label: 'Kateqoriya', type: 'text' },
            { name: 'name', label: 'Ad', type: 'text' },
            { name: 'description', label: 'Təsvir', type: 'textarea' },
            { name: 'status', label: 'Status', type: 'text' }
        ]
    },
    {
        key: 'employees',
        title: 'İşçi siyahısı',
        api: '/api/employees',
        fields: [
            { name: 'fullName', label: 'Ad Soyad', type: 'text' },
            { name: 'department', label: 'Şöbə', type: 'text' },
            { name: 'position', label: 'Vəzifə', type: 'text' },
            { name: 'phone', label: 'Telefon', type: 'text' },
            { name: 'email', label: 'E-poçt', type: 'text' },
            { name: 'relatedRoleId', label: 'Rol', type: 'autocomplete', refApi: '/api/roles', refIdField: 'id', refLabelField: 'name', transientName: 'relatedRoleName' },
            { name: 'managerWorkerId', label: 'Rəhbər işçi', type: 'autocomplete', refApi: '/api/employees', refIdField: 'id', refLabelField: 'fullName', transientName: 'managerWorkerName' },
            { name: 'status', label: 'Status', type: 'text' }
        ]
    },
    {
        key: 'raci',
        title: 'RACI matrisi',
        api: '/api/raci-matrices',
        fields: [
            { name: 'activityArea', label: 'Fəaliyyət sahəsi', type: 'text' },
            { name: 'activityStage', label: 'Mərhələ', type: 'text' },
            { name: 'activityCode', label: 'Kod', type: 'text' },
            { name: 'activityName', label: 'Fəaliyyət adı', type: 'text' },
            { name: 'responsibleRoleIds', label: 'Responsible (R)', type: 'text' },
            { name: 'accountableRoleId', label: 'Accountable (A)', type: 'text' },
            { name: 'consultedRoleIds', label: 'Consulted (C)', type: 'text' },
            { name: 'informedRoleIds', label: 'Informed (I)', type: 'text' },
            { name: 'status', label: 'Status', type: 'text' }
        ]
    },
    {
        key: 'requirements',
        title: 'Tələblər kataloqu',
        api: '/api/requirements',
        fields: [
            { name: 'category', label: 'Kateqoriya', type: 'text' },
            { name: 'name', label: 'Ad', type: 'text' },
            { name: 'description', label: 'Təsvir', type: 'textarea' },
            { name: 'securityPrinciples', label: 'Təhlükəsizlik prinsipləri', type: 'textarea' },
            { name: 'activityArea', label: 'Fəaliyyət sahəsi', type: 'text' },
            { name: 'sourceType', label: 'Mənbə tipi', type: 'text' },
            { name: 'sourceDetails', label: 'Mənbə detalları', type: 'textarea' },
            { name: 'clause', label: 'Maddə', type: 'text' },
            { name: 'status', label: 'Status', type: 'text' }
        ]
    },
    {
        key: 'thresholds',
        title: 'Məqbul hədlər uçotu',
        api: '/api/thresholds',
        fields: [
            { name: 'category', label: 'Kateqoriya', type: 'text' },
            { name: 'name', label: 'Ad', type: 'text' },
            { name: 'description', label: 'Təsvir', type: 'textarea' },
            { name: 'activityArea', label: 'Fəaliyyət sahəsi', type: 'text' },
            { name: 'assetId', label: 'Aktiv', type: 'autocomplete', refApi: '/api/assets', refIdField: 'id', refLabelField: 'name', transientName: 'assetName' },
            { name: 'metricCode', label: 'Metrik kodu', type: 'text' },
            { name: 'operator', label: 'Operator', type: 'text' },
            { name: 'value1', label: 'Dəyər 1', type: 'text' },
            { name: 'value2', label: 'Dəyər 2', type: 'text' },
            { name: 'unit', label: 'Vahid', type: 'text' },
            { name: 'sourceDocumentType', label: 'Sənəd tipi', type: 'text' },
            { name: 'sourceDocumentDetails', label: 'Sənəd detalları', type: 'textarea' },
            { name: 'startDate', label: 'Başlanğıc tarixi', type: 'date' },
            { name: 'endDate', label: 'Bitmə tarixi', type: 'date' },
            { name: 'status', label: 'Status', type: 'text' }
        ]
    },
    {
        key: 'discrepancies',
        title: 'Uyğunsuzluqlar uçotu',
        api: '/api/discrepancies',
        fields: [
            { name: 'category', label: 'Kateqoriya', type: 'text' },
            { name: 'name', label: 'Ad', type: 'text' },
            { name: 'description', label: 'Təsvir', type: 'textarea' },
            { name: 'violatedRequirementId', label: 'Pozulan tələb', type: 'autocomplete', refApi: '/api/requirements', refIdField: 'id', refLabelField: 'name', transientName: 'violatedRequirementName' },
            { name: 'assetId', label: 'Aktiv', type: 'autocomplete', refApi: '/api/assets', refIdField: 'id', refLabelField: 'name', transientName: 'assetName' },
            { name: 'addressObject', label: 'Ünvan obyekti', type: 'text' },
            { name: 'severity', label: 'Ciddilik', type: 'text' }
        ]
    },
    {
        key: 'threats',
        title: 'Təhdid təsnifatı',
        api: '/api/threats',
        fields: [
            { name: 'category', label: 'Kateqoriya', type: 'text' },
            { name: 'name', label: 'Ad', type: 'text' },
            { name: 'description', label: 'Təsvir', type: 'textarea' },
            { name: 'source', label: 'Mənbə', type: 'text' },
            { name: 'target', label: 'Hədəf', type: 'text' },
            { name: 'intentNature', label: 'Niyyət xarakteri', type: 'text' },
            { name: 'targetArea', label: 'Hədəf sahəsi', type: 'text' },
            { name: 'status', label: 'Status', type: 'text' }
        ]
    },
    {
        key: 'threatAssessments',
        title: 'Təhdidlərin qiymətləndirilməsi',
        api: '/api/threat-assessments',
        fields: [
            { name: 'threatId', label: 'Təhdid', type: 'autocomplete', refApi: '/api/threats', refIdField: 'id', refLabelField: 'name', transientName: 'threatName' },
            { name: 'assetId', label: 'Aktiv', type: 'autocomplete', refApi: '/api/assets', refIdField: 'id', refLabelField: 'name', transientName: 'assetName' },
            { name: 'discrepancyId', label: 'Uyğunsuzluq', type: 'autocomplete', refApi: '/api/discrepancies', refIdField: 'id', refLabelField: 'name', transientName: 'discrepancyName' },
            { name: 'potentialEvent', label: 'Potensial hadisə', type: 'textarea' },
            { name: 'implementationTechnology', label: 'Texnologiya', type: 'text' },
            { name: 'frequency', label: 'Tezlik', type: 'text' },
            { name: 'probabilityDegree', label: 'Ehtimal dərəcəsi', type: 'text' },
            { name: 'assessmentDate', label: 'Qiymətləndirmə tarixi', type: 'date' },
            { name: 'status', label: 'Status', type: 'text' }
        ]
    },
    {
        key: 'solutions',
        title: 'Həllər kataloqu',
        api: '/api/solutions',
        fields: [
            { name: 'controlType', label: 'Nəzarət tipi', type: 'text' },
            { name: 'name', label: 'Ad', type: 'text' },
            { name: 'description', label: 'Təsvir', type: 'textarea' },
            { name: 'applicationArea', label: 'Tətbiq sahəsi', type: 'text' },
            { name: 'technology', label: 'Texnologiya', type: 'text' },
            { name: 'applicationMethod', label: 'Tətbiq üsulu', type: 'text' }
        ]
    },
    {
        key: 'consequences',
        title: 'Fəsadların qeydiyyatı',
        api: '/api/consequences',
        fields: [
            { name: 'category', label: 'Kateqoriya', type: 'text' },
            { name: 'type', label: 'Tip', type: 'text' },
            { name: 'name', label: 'Ad', type: 'text' },
            { name: 'description', label: 'Təsvir', type: 'textarea' },
            { name: 'threatScenarioId', label: 'Təhdid ssenarisi', type: 'autocomplete', refApi: '/api/threat-assessments', refIdField: 'id', refLabelField: 'potentialEvent', transientName: 'threatScenarioName' },
            { name: 'assetId', label: 'Aktiv', type: 'autocomplete', refApi: '/api/assets', refIdField: 'id', refLabelField: 'name', transientName: 'assetName' },
            { name: 'severity', label: 'Ciddilik', type: 'text' },
            { name: 'status', label: 'Status', type: 'text' }
        ]
    },
    {
        key: 'risks',
        title: 'Risk Reyestri',
        api: '/api/risks',
        fields: [
            { name: 'category', label: 'Kateqoriya', type: 'text' },
            { name: 'name', label: 'Ad', type: 'text' },
            { name: 'description', label: 'Təsvir', type: 'textarea' },
            { name: 'threatScenarioId', label: 'Təhdid ssenarisi', type: 'autocomplete', refApi: '/api/threat-assessments', refIdField: 'id', refLabelField: 'potentialEvent', transientName: 'threatScenarioName' },
            { name: 'discrepancyId', label: 'Uyğunsuzluq', type: 'autocomplete', refApi: '/api/discrepancies', refIdField: 'id', refLabelField: 'name', transientName: 'discrepancyName' },
            { name: 'consequenceId', label: 'Fəsad', type: 'autocomplete', refApi: '/api/consequences', refIdField: 'id', refLabelField: 'name', transientName: 'consequenceName' },
            { name: 'qualitativeRating', label: 'Keyfiyyət reytinqi', type: 'text' },
            { name: 'quantitativeRating', label: 'Kəmiyyət reytinqi', type: 'number' },
            { name: 'treatmentOption', label: 'Risk emalı', type: 'text' },
            { name: 'solutionId', label: 'Həll', type: 'autocomplete', refApi: '/api/solutions', refIdField: 'id', refLabelField: 'name', transientName: 'solutionName' },
            { name: 'incidentOccurred', label: 'İnsident baş verib', type: 'boolean' },
            { name: 'status', label: 'Status', type: 'text' },
            { name: 'ownerWorkerId', label: 'Sahib işçi', type: 'autocomplete', refApi: '/api/employees', refIdField: 'id', refLabelField: 'fullName', transientName: 'ownerWorkerName' }
        ]
    },
    {
        key: 'incidents',
        title: 'İnsidentlərin qeydiyyatı',
        api: '/api/incidents',
        fields: [
            { name: 'relatedRiskId', label: 'Risk', type: 'autocomplete', refApi: '/api/risks', refIdField: 'id', refLabelField: 'name', transientName: 'relatedRiskName' },
            { name: 'category', label: 'Kateqoriya', type: 'text' },
            { name: 'name', label: 'Ad', type: 'text' },
            { name: 'description', label: 'Təsvir', type: 'textarea' },
            { name: 'occurrenceDateTime', label: 'Baş vermə vaxtı', type: 'datetime' },
            { name: 'discoveryDate', label: 'Aşkarlanma tarixi', type: 'date' },
            { name: 'status', label: 'Status', type: 'text' },
            { name: 'responseOption', label: 'Cavab variantı', type: 'text' },
            { name: 'responseMethod', label: 'Cavab üsulu', type: 'text' },
            { name: 'responseSolution', label: 'Cavab həlli', type: 'text' },
            { name: 'rootCause', label: 'Kök səbəb', type: 'textarea' },
            { name: 'result', label: 'Nəticə', type: 'textarea' },
            { name: 'closureDateTime', label: 'Bağlanma vaxtı', type: 'datetime' }
        ]
    }
];

// Global State
window.__lookupCache = {};
let currentEntity = null;
let isUserManagement = false;
let editingId = null;
let currentUser = null;

let entityModalInstance = null;
let passwordModalInstance = null;
let userModalInstance = null;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    entityModalInstance = new bootstrap.Modal(document.getElementById('entityModal'));
    passwordModalInstance = new bootstrap.Modal(document.getElementById('passwordModal'));
    userModalInstance = new bootstrap.Modal(document.getElementById('userModal'));

    document.getElementById('loginForm').addEventListener('submit', onLoginSubmit);
    document.getElementById('passwordForm').addEventListener('submit', onPasswordFormSubmit);
    document.getElementById('userForm').addEventListener('submit', onUserFormSubmit);
    document.getElementById('entityForm').addEventListener('submit', onFormSubmit);
    document.getElementById('btnAdd').addEventListener('click', () => {
        if (isUserManagement) {
            openUserModal(null);
        } else {
            openModal(null);
        }
    });

    document.getElementById('btnChangePassword').addEventListener('click', openPasswordModal);
    document.getElementById('btnLogout').addEventListener('click', logout);

    // Horizontal Scroll controls
    document.getElementById('btnScrollLeft').addEventListener('click', () => {
        document.querySelector('.table-responsive').scrollBy({ left: -350, behavior: 'smooth' });
    });
    document.getElementById('btnScrollRight').addEventListener('click', () => {
        document.querySelector('.table-responsive').scrollBy({ left: 350, behavior: 'smooth' });
    });

    // Global document click listener for autocomplete dropdown closing
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.autocomplete-container')) {
            document.querySelectorAll('.autocomplete-dropdown').forEach(el => el.classList.remove('show'));
        }
    });

    checkAuth();
});

// ── Auth Logic ─────────────────────────────────────────────────────────────
async function checkAuth() {
    try {
        const response = await fetch('/api/auth/me');
        if (response.ok) {
            currentUser = await response.json();
            onLoginSuccess();
        } else {
            showLoginOverlay();
        }
    } catch (error) {
        showLoginOverlay();
    }
}

function showLoginOverlay(message = null) {
    currentUser = null;
    document.getElementById('loginOverlay').classList.remove('d-none');
    document.getElementById('appShell').style.display = 'none';
    if (message) {
        document.getElementById('loginAlert').innerHTML = `
            <div class="alert alert-danger py-2" role="alert">${escapeHtml(message)}</div>
        `;
    } else {
        document.getElementById('loginAlert').innerHTML = '';
    }
}

function onLoginSuccess() {
    document.getElementById('loginOverlay').classList.add('d-none');
    document.getElementById('appShell').style.display = 'flex';
    document.getElementById('userName').textContent = currentUser.fullName || currentUser.username;

    const badge = document.getElementById('userRoleBadge');
    if (currentUser.role === 'ADMIN') {
        badge.textContent = 'Admin';
        badge.className = 'badge badge-admin';
    } else {
        badge.textContent = 'İstifadəçi';
        badge.className = 'badge badge-user';
    }

    renderSidebar();
    selectEntity(ENTITIES[0]);
}

async function onLoginSubmit(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;

    setLoading(true);
    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        if (!response.ok) {
            const err = await response.json().catch(() => ({}));
            throw new Error(err.message || 'İstifadəçi adı və ya parol səhvdir');
        }
        currentUser = await response.json();
        onLoginSuccess();
    } catch (error) {
        document.getElementById('loginAlert').innerHTML = `
            <div class="alert alert-danger py-2" role="alert">${escapeHtml(error.message)}</div>
        `;
    } finally {
        setLoading(false);
    }
}

async function logout() {
    setLoading(true);
    try {
        await fetch('/api/auth/logout', { method: 'POST' });
    } catch (ignored) {
    } finally {
        setLoading(false);
        showLoginOverlay('Sistemdən çıxış edildi.');
    }
}

async function authFetch(url, options = {}) {
    const response = await fetch(url, options);
    if (response.status === 401) {
        showLoginOverlay('Sessiya bitdi, yenidən daxil olun');
        throw new Error('Sessiya bitdi');
    }
    if (response.status === 403) {
        showAlert('Bu əməliyyat üçün icazəniz yoxdur.', 'warning');
        throw new Error('İcazə yoxdur');
    }
    return response;
}

// ── Password Change ────────────────────────────────────────────────────────
function openPasswordModal() {
    document.getElementById('passwordForm').reset();
    document.getElementById('passwordAlert').innerHTML = '';
    passwordModalInstance.show();
}

async function onPasswordFormSubmit(e) {
    e.preventDefault();
    const oldPassword = document.getElementById('oldPasswordInput').value;
    const newPassword = document.getElementById('newPasswordInput').value;
    const confirmPassword = document.getElementById('confirmPasswordInput').value;

    if (newPassword !== confirmPassword) {
        document.getElementById('passwordAlert').innerHTML = `
            <div class="alert alert-danger py-2">Yeni parollar üst-üstə düşmür!</div>
        `;
        return;
    }

    setLoading(true);
    try {
        const response = await authFetch(`/api/users/${currentUser.id}/change-password`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ oldPassword, newPassword })
        });
        const resData = await response.json();
        if (!response.ok) {
            throw new Error(resData.message || 'Parol dəyişdirilə bilmədi');
        }
        passwordModalInstance.hide();
        showAlert('Parolunuz uğurla dəyişdirildi.');
    } catch (error) {
        if (error.message !== 'Sessiya bitdi' && error.message !== 'İcazə yoxdur') {
            document.getElementById('passwordAlert').innerHTML = `
                <div class="alert alert-danger py-2">${escapeHtml(error.message)}</div>
            `;
        }
    } finally {
        setLoading(false);
    }
}

// ── Sidebar & Navigation ────────────────────────────────────────────────────
function renderSidebar() {
    const nav = document.getElementById('sidebarNav');
    let html = ENTITIES.map(entity => `
        <li>
            <button type="button" data-key="${entity.key}">
                <i class="bi bi-table"></i> ${entity.title}
            </button>
        </li>
    `).join('');

    if (currentUser && currentUser.role === 'ADMIN') {
        html += `
            <li class="nav-divider"></li>
            <li>
                <button type="button" data-key="userManagement">
                    <i class="bi bi-people-fill"></i> İstifadəçi idarəetməsi
                </button>
            </li>
        `;
    }

    nav.innerHTML = html;

    nav.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.dataset.key;
            if (key === 'userManagement') {
                selectUserManagement();
            } else {
                const entity = ENTITIES.find(e => e.key === key);
                selectEntity(entity);
            }
        });
    });
}

function selectEntity(entity) {
    currentEntity = entity;
    isUserManagement = false;
    editingId = null;

    document.getElementById('panelTitle').textContent = entity.title;
    const btnAdd = document.getElementById('btnAdd');
    if (currentUser && currentUser.role === 'ADMIN') {
        btnAdd.disabled = false;
        btnAdd.style.display = 'inline-block';
    } else {
        btnAdd.disabled = true;
        btnAdd.style.display = 'none';
    }

    document.querySelectorAll('#sidebarNav button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.key === entity.key);
    });

    loadData();
}

function selectUserManagement() {
    currentEntity = null;
    isUserManagement = true;
    editingId = null;

    document.getElementById('panelTitle').textContent = 'İstifadəçilərin İdarə Edilməsi';
    const btnAdd = document.getElementById('btnAdd');
    btnAdd.disabled = false;
    btnAdd.style.display = 'inline-block';

    document.querySelectorAll('#sidebarNav button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.key === 'userManagement');
    });

    loadUsers();
}

// ── Data Loading & Rendering ────────────────────────────────────────────────
function setLoading(show) {
    document.getElementById('loadingOverlay').classList.toggle('show', show);
}

function showAlert(message, type = 'success') {
    const container = document.getElementById('alertContainer');
    container.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${escapeHtml(message)}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
}

async function loadData() {
    if (!currentEntity) return;
    setLoading(true);
    try {
        const response = await authFetch(currentEntity.api);
        if (!response.ok) {
            throw new Error('Məlumat yüklənmədi');
        }
        const rows = await response.json();
        renderTable(rows);
    } catch (error) {
        if (error.message !== 'Sessiya bitdi') {
            showAlert(error.message, 'danger');
            renderTable([]);
        }
    } finally {
        setLoading(false);
    }
}

function renderTable(rows) {
    const head = document.getElementById('tableHead');
    const body = document.getElementById('tableBody');
    const empty = document.getElementById('emptyState');
    const isAdmin = currentUser && currentUser.role === 'ADMIN';

    // Show ALL fields in the table columns
    const columns = currentEntity.fields;

    head.innerHTML = `<tr>
        <th>ID</th>
        ${columns.map(f => `<th>${escapeHtml(f.label)}</th>`).join('')}
        ${isAdmin ? '<th>Əməliyyat</th>' : ''}
    </tr>`;

    if (!rows.length) {
        body.innerHTML = '';
        empty.classList.remove('d-none');
        return;
    }

    empty.classList.add('d-none');
    body.innerHTML = rows.map(row => {
        const cellHtmls = columns.map(field => {
            let displayVal = '';
            if (field.type === 'autocomplete') {
                if (field.transientName && row[field.transientName]) {
                    displayVal = `${row[field.transientName]} (ID: ${row[field.name]})`;
                } else if (row[field.name]) {
                    displayVal = window.__lookupCache[field.refApi + '_' + row[field.name]] || `ID: ${row[field.name]}`;
                }
            } else if (field.type === 'date') {
                displayVal = toInputDate(row[field.name]);
            } else if (field.type === 'datetime') {
                displayVal = toInputDateTime(row[field.name]);
            } else {
                displayVal = formatCell(row[field.name]);
            }
            return `<td title="${escapeAttr(displayVal)}">${escapeHtml(displayVal)}</td>`;
        }).join('');

        const actionHtml = isAdmin ? `
            <td class="actions-cell">
                <button class="btn btn-sm btn-outline-primary me-1" data-action="edit" data-id="${row.id}">
                    <i class="bi bi-pencil"></i> Düzəliş Et
                </button>
                <button class="btn btn-sm btn-outline-danger" data-action="delete" data-id="${row.id}">
                    <i class="bi bi-trash"></i> Sil
                </button>
            </td>
        ` : '';

        return `<tr>
            <td><strong>#${row.id}</strong></td>
            ${cellHtmls}
            ${actionHtml}
        </tr>`;
    }).join('');

    if (isAdmin) {
        body.querySelectorAll('[data-action="edit"]').forEach(btn => {
            btn.addEventListener('click', () => openModal(Number(btn.dataset.id)));
        });
        body.querySelectorAll('[data-action="delete"]').forEach(btn => {
            btn.addEventListener('click', () => deleteRow(Number(btn.dataset.id)));
        });
    }
}

function formatCell(value) {
    if (value === null || value === undefined) return '';
    if (typeof value === 'boolean') return value ? 'Bəli' : 'Xeyr';
    const str = String(value);
    return str.length > 45 ? str.substring(0, 42) + '...' : str;
}

// ── Form Building & Autocomplete ────────────────────────────────────────────
function buildFormFields(record = {}) {
    const container = document.getElementById('modalFormFields');
    container.innerHTML = '';

    currentEntity.fields.forEach(field => {
        const value = record[field.name];
        const inputId = `field_${field.name}`;
        let fieldHtml = '';

        if (field.type === 'textarea') {
            fieldHtml = fieldBlock(field, `<textarea class="form-control" id="${inputId}" name="${field.name}">${escapeHtml(value ?? '')}</textarea>`);
        } else if (field.type === 'boolean') {
            const checked = value === true ? 'checked' : '';
            fieldHtml = fieldBlock(field, `<div class="form-check">
                <input class="form-check-input" type="checkbox" id="${inputId}" name="${field.name}" ${checked}>
                <label class="form-check-label" for="${inputId}">Bəli</label>
            </div>`);
        } else if (field.type === 'date') {
            fieldHtml = fieldBlock(field, `<input type="date" class="form-control" id="${inputId}" name="${field.name}" value="${toInputDate(value)}">`);
        } else if (field.type === 'datetime') {
            fieldHtml = fieldBlock(field, `<input type="datetime-local" class="form-control" id="${inputId}" name="${field.name}" value="${toInputDateTime(value)}">`);
        } else if (field.type === 'number') {
            fieldHtml = fieldBlock(field, `<input type="number" step="any" class="form-control" id="${inputId}" name="${field.name}" value="${value ?? ''}">`);
        } else if (field.type === 'autocomplete') {
            fieldHtml = buildAutocompleteField(field, value, record);
        } else {
            fieldHtml = fieldBlock(field, `<input type="text" class="form-control" id="${inputId}" name="${field.name}" value="${escapeAttr(value ?? '')}">`);
        }

        container.insertAdjacentHTML('beforeend', fieldHtml);
    });

    // Attach search handlers to created autocompletes
    currentEntity.fields.filter(f => f.type === 'autocomplete').forEach(field => {
        initAutocompleteEvents(field, record);
    });
}

function fieldBlock(field, inputHtml) {
    return `<div class="mb-3">
        <label class="form-label" for="field_${field.name}">${escapeHtml(field.label)}</label>
        ${inputHtml}
    </div>`;
}

function buildAutocompleteField(field, value, record) {
    const inputId = `field_${field.name}`;
    const hiddenId = `field_hidden_${field.name}`;

    let initialLabel = '';
    if (value) {
        if (field.transientName && record[field.transientName]) {
            initialLabel = `${record[field.transientName]} (ID: ${value})`;
        } else {
            initialLabel = `ID: ${value}`;
        }
    }

    return `
        <div class="mb-3 autocomplete-container">
            <label class="form-label" for="${inputId}">${escapeHtml(field.label)}</label>
            <div class="autocomplete-input-group">
                <input type="text" class="form-control autocomplete-search-input" id="${inputId}"
                       placeholder="Axtarış üçün yazın..." value="${escapeAttr(initialLabel)}" autocomplete="off">
                <button type="button" class="btn btn-outline-secondary btn-clear-autocomplete" id="clear_${field.name}">Təmizlə</button>
            </div>
            <input type="hidden" name="${field.name}" id="${hiddenId}" value="${value ?? ''}">
            <div class="autocomplete-dropdown" id="dropdown_${field.name}"></div>
        </div>
    `;
}

function initAutocompleteEvents(field, record) {
    const searchInput = document.getElementById(`field_${field.name}`);
    const hiddenInput = document.getElementById(`field_hidden_${field.name}`);
    const dropdown = document.getElementById(`dropdown_${field.name}`);
    const clearBtn = document.getElementById(`clear_${field.name}`);

    if (!searchInput) return;

    // Async pre-populate if label is missing transient name
    if (hiddenInput.value && searchInput.value.startsWith('ID:')) {
        fetch(`${field.refApi}/${hiddenInput.value}`)
            .then(res => res.ok ? res.json() : null)
            .then(data => {
                if (data) {
                    const labelVal = data[field.refLabelField] || data.name || data.fullName || data.potentialEvent || '';
                    const formatted = `${labelVal} (ID: ${hiddenInput.value})`;
                    searchInput.value = formatted;
                    window.__lookupCache[field.refApi + '_' + hiddenInput.value] = formatted;
                }
            })
            .catch(() => {});
    }

    let debounceTimer = null;
    searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        const query = searchInput.value.trim();

        if (query === '') {
            hiddenInput.value = '';
            dropdown.classList.remove('show');
            return;
        }

        debounceTimer = setTimeout(async () => {
            try {
                const response = await fetch(`${field.refApi}?search=${encodeURIComponent(query)}`);
                if (!response.ok) return;
                const items = await response.json();
                renderAutocompleteDropdown(field, items, dropdown, searchInput, hiddenInput);
            } catch (err) {}
        }, 300);
    });

    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim() !== '') {
            searchInput.dispatchEvent(new Event('input'));
        }
    });

    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        hiddenInput.value = '';
        dropdown.classList.remove('show');
    });
}

function renderAutocompleteDropdown(field, items, dropdown, searchInput, hiddenInput) {
    if (!items || items.length === 0) {
        dropdown.innerHTML = `<div class="autocomplete-empty">Nəticə tapılmadı</div>`;
        dropdown.classList.add('show');
        return;
    }

    dropdown.innerHTML = items.map(item => {
        const idVal = item[field.refIdField || 'id'];
        const labelVal = item[field.refLabelField] || item.name || item.fullName || item.potentialEvent || '';
        return `
            <div class="autocomplete-item" data-id="${idVal}" data-label="${escapeAttr(labelVal)}">
                <span class="item-label">${escapeHtml(labelVal)}</span>
                <span class="item-id">(ID: ${idVal})</span>
            </div>
        `;
    }).join('');

    dropdown.classList.add('show');

    dropdown.querySelectorAll('.autocomplete-item').forEach(itemEl => {
        itemEl.addEventListener('click', () => {
            const selectedId = itemEl.dataset.id;
            const selectedLabel = itemEl.dataset.label;
            const formatted = `${selectedLabel} (ID: ${selectedId})`;

            searchInput.value = formatted;
            hiddenInput.value = selectedId;
            window.__lookupCache[field.refApi + '_' + selectedId] = formatted;

            dropdown.classList.remove('show');
        });
    });
}

// ── Entity CRUD Modal & Submit ─────────────────────────────────────────────
async function openModal(id) {
    editingId = id;
    let record = {};

    if (id !== null) {
        setLoading(true);
        try {
            const response = await authFetch(`${currentEntity.api}/${id}`);
            if (!response.ok) throw new Error('Qeyd tapılmadı');
            record = await response.json();
        } catch (error) {
            if (error.message !== 'Sessiya bitdi') showAlert(error.message, 'danger');
            setLoading(false);
            return;
        } finally {
            setLoading(false);
        }
    }

    document.getElementById('modalTitle').textContent = id === null ? 'Yeni Məlumat Əlavə Et' : 'Məlumatı Düzəliş Et';
    buildFormFields(record);
    entityModalInstance.show();
}

function collectFormData() {
    const payload = {};
    if (editingId !== null) {
        payload.id = editingId;
    }

    currentEntity.fields.forEach(field => {
        const el = document.querySelector(`[name="${field.name}"]`);
        if (!el) return;

        if (field.type === 'boolean') {
            payload[field.name] = el.checked;
            return;
        }

        const raw = el.value.trim();
        if (raw === '') {
            payload[field.name] = null;
            return;
        }

        if (field.type === 'number') {
            payload[field.name] = Number(raw);
            return;
        }

        payload[field.name] = raw;
    });

    return payload;
}

async function onFormSubmit(event) {
    event.preventDefault();
    const payload = collectFormData();
    const isEdit = editingId !== null;
    const url = isEdit ? `${currentEntity.api}/${editingId}` : currentEntity.api;
    const method = isEdit ? 'PUT' : 'POST';

    setLoading(true);
    try {
        const response = await authFetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            const err = await response.json().catch(() => ({}));
            throw new Error(err.message || 'Əməliyyat uğursuz oldu');
        }
        entityModalInstance.hide();
        showAlert(isEdit ? 'Məlumat yeniləndi.' : 'Yeni məlumat əlavə edildi.');
        await loadData();
    } catch (error) {
        if (error.message !== 'Sessiya bitdi' && error.message !== 'İcazə yoxdur') {
            showAlert(error.message, 'danger');
        }
    } finally {
        setLoading(false);
    }
}

async function deleteRow(id) {
    if (!confirm('Bu qeydi silmək istədiyinizə əminsiniz?')) return;
    setLoading(true);
    try {
        const response = await authFetch(`${currentEntity.api}/${id}`, { method: 'DELETE' });
        if (!response.ok) {
            const err = await response.json().catch(() => ({}));
            throw new Error(err.message || 'Silinmə uğursuz oldu');
        }
        showAlert('Qeyd silindi.');
        await loadData();
    } catch (error) {
        if (error.message !== 'Sessiya bitdi' && error.message !== 'İcazə yoxdur') {
            showAlert(error.message, 'danger');
        }
    } finally {
        setLoading(false);
    }
}

// ── User Management Section (Admin Only) ──────────────────────────────────
let editingUserId = null;

async function loadUsers() {
    setLoading(true);
    try {
        const response = await authFetch('/api/users');
        if (!response.ok) throw new Error('İstifadəçilər yüklənmədi');
        const users = await response.json();
        renderUsersTable(users);
    } catch (error) {
        if (error.message !== 'Sessiya bitdi') {
            showAlert(error.message, 'danger');
            renderUsersTable([]);
        }
    } finally {
        setLoading(false);
    }
}

function renderUsersTable(users) {
    const head = document.getElementById('tableHead');
    const body = document.getElementById('tableBody');
    const empty = document.getElementById('emptyState');

    head.innerHTML = `<tr>
        <th>ID</th>
        <th>İstifadəçi adı</th>
        <th>Ad Soyad</th>
        <th>Rol</th>
        <th>Status</th>
        <th>Əməliyyat</th>
    </tr>`;

    if (!users.length) {
        body.innerHTML = '';
        empty.classList.remove('d-none');
        return;
    }

    empty.classList.add('d-none');
    body.innerHTML = users.map(u => `
        <tr>
            <td><strong>#${u.id}</strong></td>
            <td>${escapeHtml(u.username)}</td>
            <td>${escapeHtml(u.fullName || '')}</td>
            <td>
                <span class="badge ${u.role === 'ADMIN' ? 'badge-admin' : 'badge-user'}">
                    ${u.role === 'ADMIN' ? 'Admin' : 'İstifadəçi'}
                </span>
            </td>
            <td>
                <span class="badge ${u.enabled ? 'bg-success' : 'bg-secondary'}">
                    ${u.enabled ? 'Aktiv' : 'Deaktiv'}
                </span>
            </td>
            <td class="actions-cell">
                <button class="btn btn-sm btn-outline-primary me-1" data-user-action="edit" data-id="${u.id}">
                    <i class="bi bi-pencil"></i> Düzəliş Et
                </button>
                <button class="btn btn-sm btn-outline-danger" data-user-action="delete" data-id="${u.id}">
                    <i class="bi bi-trash"></i> Sil
                </button>
            </td>
        </tr>
    `).join('');

    body.querySelectorAll('[data-user-action="edit"]').forEach(btn => {
        btn.addEventListener('click', () => openUserModal(Number(btn.dataset.id)));
    });
    body.querySelectorAll('[data-user-action="delete"]').forEach(btn => {
        btn.addEventListener('click', () => deleteUser(Number(btn.dataset.id)));
    });
}

async function openUserModal(userId) {
    editingUserId = userId;
    const form = document.getElementById('userForm');
    form.reset();

    const titleEl = document.getElementById('userModalTitle');
    const passLabel = document.getElementById('userPasswordLabel');
    const passHelp = document.getElementById('userPasswordHelp');
    const passInput = document.getElementById('userPassword');

    if (userId === null) {
        titleEl.textContent = 'Yeni İstifadəçi Əlavə Et';
        passLabel.textContent = 'Parol';
        passInput.required = true;
        passHelp.classList.add('d-none');
        document.getElementById('userEnabled').checked = true;
    } else {
        titleEl.textContent = 'İstifadəçini Düzəliş Et';
        passLabel.textContent = 'Yeni Parol (Könüllü)';
        passInput.required = false;
        passHelp.classList.remove('d-none');

        setLoading(true);
        try {
            const response = await authFetch(`/api/users/${userId}`);
            if (!response.ok) throw new Error('İstifadəçi tapılmadı');
            const user = await response.json();
            document.getElementById('userUsername').value = user.username;
            document.getElementById('userFullName').value = user.fullName || '';
            document.getElementById('userRole').value = user.role;
            document.getElementById('userEnabled').checked = user.enabled;
        } catch (err) {
            showAlert(err.message, 'danger');
            setLoading(false);
            return;
        } finally {
            setLoading(false);
        }
    }

    userModalInstance.show();
}

async function onUserFormSubmit(e) {
    e.preventDefault();
    const username = document.getElementById('userUsername').value.trim();
    const fullName = document.getElementById('userFullName').value.trim();
    const password = document.getElementById('userPassword').value;
    const role = document.getElementById('userRole').value;
    const enabled = document.getElementById('userEnabled').checked;

    const payload = { username, fullName, role, enabled };
    if (password) payload.password = password;

    const isEdit = editingUserId !== null;
    const url = isEdit ? `/api/users/${editingUserId}` : '/api/users';
    const method = isEdit ? 'PUT' : 'POST';

    setLoading(true);
    try {
        const response = await authFetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            const err = await response.json().catch(() => ({}));
            throw new Error(err.message || 'İstifadəçi yadda saxlanıla bilmədi');
        }
        userModalInstance.hide();
        showAlert(isEdit ? 'İstifadəçi məlumatları yeniləndi.' : 'Yeni istifadəçi yaradıldı.');
        await loadUsers();
    } catch (error) {
        if (error.message !== 'Sessiya bitdi' && error.message !== 'İcazə yoxdur') {
            showAlert(error.message, 'danger');
        }
    } finally {
        setLoading(false);
    }
}

async function deleteUser(id) {
    if (!confirm('Bu istifadəçini silmək istədiyinizə əminsiniz?')) return;
    setLoading(true);
    try {
        const response = await authFetch(`/api/users/${id}`, { method: 'DELETE' });
        if (!response.ok) {
            const err = await response.json().catch(() => ({}));
            throw new Error(err.message || 'Silinmə uğursuz oldu');
        }
        showAlert('İstifadəçi silindi.');
        await loadUsers();
    } catch (error) {
        if (error.message !== 'Sessiya bitdi' && error.message !== 'İcazə yoxdur') {
            showAlert(error.message, 'danger');
        }
    } finally {
        setLoading(false);
    }
}

// ── Helpers ─────────────────────────────────────────────────────────────────
function toInputDate(value) {
    if (!value) return '';
    return String(value).substring(0, 10);
}

function toInputDateTime(value) {
    if (!value) return '';
    const normalized = String(value).replace(' ', 'T');
    return normalized.length >= 16 ? normalized.substring(0, 16) : normalized;
}

function escapeHtml(text) {
    return String(text ?? '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

function escapeAttr(text) {
    return escapeHtml(text).replaceAll('\n', ' ');
}
