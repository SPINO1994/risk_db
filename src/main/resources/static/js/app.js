const ENTITIES = [
    {
        key: 'assets',
        title: 'Aktiv uçotu',
        api: '/api/assets',
        fields: [
            { name: 'assetId', label: 'Aktiv ID', type: 'text' },
            { name: 'category', label: 'Kateqoriya', type: 'text' },
            { name: 'name', label: 'Ad', type: 'text' },
            { name: 'ownerWorkerId', label: 'Sahib işçi ID', type: 'text' },
            { name: 'responsibleWorkerId', label: 'Məsul işçi ID', type: 'text' },
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
            { name: 'roleId', label: 'Rol ID', type: 'text' },
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
            { name: 'workerId', label: 'İşçi ID', type: 'text' },
            { name: 'fullName', label: 'Ad Soyad', type: 'text' },
            { name: 'department', label: 'Şöbə', type: 'text' },
            { name: 'position', label: 'Vəzifə', type: 'text' },
            { name: 'phone', label: 'Telefon', type: 'text' },
            { name: 'email', label: 'E-poçt', type: 'text' },
            { name: 'relatedRoleId', label: 'Rol ID', type: 'text' },
            { name: 'managerWorkerId', label: 'Rəhbər işçi ID', type: 'text' },
            { name: 'status', label: 'Status', type: 'text' }
        ]
    },
    {
        key: 'raci',
        title: 'RACI matrisi',
        api: '/api/raci-matrices',
        fields: [
            { name: 'raciId', label: 'RACI ID', type: 'text' },
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
            { name: 'requirementId', label: 'Tələb ID', type: 'text' },
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
            { name: 'thresholdId', label: 'Hədd ID', type: 'text' },
            { name: 'category', label: 'Kateqoriya', type: 'text' },
            { name: 'name', label: 'Ad', type: 'text' },
            { name: 'description', label: 'Təsvir', type: 'textarea' },
            { name: 'activityArea', label: 'Fəaliyyət sahəsi', type: 'text' },
            { name: 'assetId', label: 'Aktiv ID', type: 'text' },
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
            { name: 'discrepancyId', label: 'Uyğunsuzluq ID', type: 'text' },
            { name: 'category', label: 'Kateqoriya', type: 'text' },
            { name: 'name', label: 'Ad', type: 'text' },
            { name: 'description', label: 'Təsvir', type: 'textarea' },
            { name: 'violatedRequirementId', label: 'Pozulan tələb ID', type: 'text' },
            { name: 'assetId', label: 'Aktiv ID', type: 'text' },
            { name: 'addressObject', label: 'Ünvan obyekti', type: 'text' },
            { name: 'severity', label: 'Ciddilik', type: 'text' }
        ]
    },
    {
        key: 'threats',
        title: 'Təhdid təsnifatı',
        api: '/api/threats',
        fields: [
            { name: 'threatId', label: 'Təhdid ID', type: 'text' },
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
            { name: 'scenarioId', label: 'Ssenari ID', type: 'text' },
            { name: 'threatId', label: 'Təhdid ID', type: 'text' },
            { name: 'assetId', label: 'Aktiv ID', type: 'text' },
            { name: 'discrepancyId', label: 'Uyğunsuzluq ID', type: 'text' },
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
            { name: 'solutionId', label: 'Həll ID', type: 'text' },
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
            { name: 'consequenceId', label: 'Fəsad ID', type: 'text' },
            { name: 'category', label: 'Kateqoriya', type: 'text' },
            { name: 'type', label: 'Tip', type: 'text' },
            { name: 'name', label: 'Ad', type: 'text' },
            { name: 'description', label: 'Təsvir', type: 'textarea' },
            { name: 'threatScenarioId', label: 'Təhdid ssenari ID', type: 'text' },
            { name: 'assetId', label: 'Aktiv ID', type: 'text' },
            { name: 'severity', label: 'Ciddilik', type: 'text' },
            { name: 'status', label: 'Status', type: 'text' }
        ]
    },
    {
        key: 'risks',
        title: 'Risk Reyestri',
        api: '/api/risks',
        fields: [
            { name: 'riskId', label: 'Risk ID', type: 'text' },
            { name: 'category', label: 'Kateqoriya', type: 'text' },
            { name: 'name', label: 'Ad', type: 'text' },
            { name: 'description', label: 'Təsvir', type: 'textarea' },
            { name: 'threatScenarioId', label: 'Təhdid ssenari ID', type: 'text' },
            { name: 'discrepancyId', label: 'Uyğunsuzluq ID', type: 'text' },
            { name: 'consequenceId', label: 'Fəsad ID', type: 'text' },
            { name: 'qualitativeRating', label: 'Keyfiyyət reytinqi', type: 'text' },
            { name: 'quantitativeRating', label: 'Kəmiyyət reytinqi', type: 'number' },
            { name: 'treatmentOption', label: 'Risk emalı', type: 'text' },
            { name: 'solutionId', label: 'Həll ID', type: 'text' },
            { name: 'incidentOccurred', label: 'İnsident baş verib', type: 'boolean' },
            { name: 'status', label: 'Status', type: 'text' },
            { name: 'ownerWorkerId', label: 'Sahib işçi ID', type: 'text' }
        ]
    },
    {
        key: 'incidents',
        title: 'İnsidentlərin qeydiyyatı',
        api: '/api/incidents',
        fields: [
            { name: 'incidentId', label: 'İnsident ID', type: 'text' },
            { name: 'relatedRiskId', label: 'Risk ID', type: 'text' },
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

let currentEntity = null;
let editingId = null;
let modalInstance = null;

document.addEventListener('DOMContentLoaded', () => {
    modalInstance = new bootstrap.Modal(document.getElementById('entityModal'));
    renderSidebar();
    document.getElementById('btnAdd').addEventListener('click', () => openModal(null));
    document.getElementById('entityForm').addEventListener('submit', onFormSubmit);
    selectEntity(ENTITIES[0]);
});

function renderSidebar() {
    const nav = document.getElementById('sidebarNav');
    nav.innerHTML = ENTITIES.map(entity => `
        <li>
            <button type="button" data-key="${entity.key}">${entity.title}</button>
        </li>
    `).join('');

    nav.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            const entity = ENTITIES.find(e => e.key === btn.dataset.key);
            selectEntity(entity);
        });
    });
}

function selectEntity(entity) {
    currentEntity = entity;
    editingId = null;
    document.getElementById('panelTitle').textContent = entity.title;
    document.getElementById('btnAdd').disabled = false;

    document.querySelectorAll('#sidebarNav button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.key === entity.key);
    });

    loadData();
}

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
    if (!currentEntity) {
        return;
    }
    setLoading(true);
    try {
        const response = await fetch(currentEntity.api);
        if (!response.ok) {
            throw new Error('Məlumat yüklənmədi');
        }
        const rows = await response.json();
        renderTable(rows);
    } catch (error) {
        showAlert(error.message, 'danger');
        renderTable([]);
    } finally {
        setLoading(false);
    }
}

function renderTable(rows) {
    const head = document.getElementById('tableHead');
    const body = document.getElementById('tableBody');
    const empty = document.getElementById('emptyState');

    const columns = currentEntity.fields.slice(0, 6);
    head.innerHTML = `<tr>
        <th>ID</th>
        ${columns.map(f => `<th>${escapeHtml(f.label)}</th>`).join('')}
        <th>Əməliyyat</th>
    </tr>`;

    if (!rows.length) {
        body.innerHTML = '';
        empty.classList.remove('d-none');
        return;
    }

    empty.classList.add('d-none');
    body.innerHTML = rows.map(row => `
        <tr>
            <td>${row.id ?? ''}</td>
            ${columns.map(f => `<td title="${escapeAttr(formatCell(row[f.name]))}">${escapeHtml(formatCell(row[f.name]))}</td>`).join('')}
            <td class="actions-cell">
                <button class="btn btn-sm btn-outline-primary me-1" data-action="edit" data-id="${row.id}">Düzəliş Et</button>
                <button class="btn btn-sm btn-outline-danger" data-action="delete" data-id="${row.id}">Sil</button>
            </td>
        </tr>
    `).join('');

    body.querySelectorAll('[data-action="edit"]').forEach(btn => {
        btn.addEventListener('click', () => openModal(Number(btn.dataset.id)));
    });
    body.querySelectorAll('[data-action="delete"]').forEach(btn => {
        btn.addEventListener('click', () => deleteRow(Number(btn.dataset.id)));
    });
}

function formatCell(value) {
    if (value === null || value === undefined) {
        return '';
    }
    if (typeof value === 'boolean') {
        return value ? 'Bəli' : 'Xeyr';
    }
    return String(value);
}

function buildFormFields(record = {}) {
    const container = document.getElementById('modalFormFields');
    container.innerHTML = currentEntity.fields.map(field => {
        const value = record[field.name];
        const inputId = `field_${field.name}`;

        if (field.type === 'textarea') {
            return fieldBlock(field, `<textarea class="form-control" id="${inputId}" name="${field.name}">${escapeHtml(value ?? '')}</textarea>`);
        }
        if (field.type === 'boolean') {
            const checked = value === true ? 'checked' : '';
            return fieldBlock(field, `<div class="form-check">
                <input class="form-check-input" type="checkbox" id="${inputId}" name="${field.name}" ${checked}>
                <label class="form-check-label" for="${inputId}">Bəli</label>
            </div>`);
        }
        if (field.type === 'date') {
            return fieldBlock(field, `<input type="date" class="form-control" id="${inputId}" name="${field.name}" value="${toInputDate(value)}">`);
        }
        if (field.type === 'datetime') {
            return fieldBlock(field, `<input type="datetime-local" class="form-control" id="${inputId}" name="${field.name}" value="${toInputDateTime(value)}">`);
        }
        if (field.type === 'number') {
            return fieldBlock(field, `<input type="number" step="any" class="form-control" id="${inputId}" name="${field.name}" value="${value ?? ''}">`);
        }
        return fieldBlock(field, `<input type="text" class="form-control" id="${inputId}" name="${field.name}" value="${escapeAttr(value ?? '')}">`);
    }).join('');
}

function fieldBlock(field, inputHtml) {
    return `<div class="mb-3">
        <label class="form-label" for="field_${field.name}">${escapeHtml(field.label)}</label>
        ${inputHtml}
    </div>`;
}

async function openModal(id) {
    editingId = id;
    let record = {};
    if (id !== null) {
        setLoading(true);
        try {
            const response = await fetch(`${currentEntity.api}/${id}`);
            if (!response.ok) {
                throw new Error('Qeyd tapılmadı');
            }
            record = await response.json();
        } catch (error) {
            showAlert(error.message, 'danger');
            setLoading(false);
            return;
        } finally {
            setLoading(false);
        }
    }

    document.getElementById('modalTitle').textContent = id === null
        ? 'Yeni Məlumat Əlavə Et'
        : 'Məlumatı Düzəliş Et';
    buildFormFields(record);
    modalInstance.show();
}

function collectFormData() {
    const payload = {};
    if (editingId !== null) {
        payload.id = editingId;
    }

    currentEntity.fields.forEach(field => {
        const el = document.querySelector(`[name="${field.name}"]`);
        if (!el) {
            return;
        }
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
        const response = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            const err = await response.json().catch(() => ({}));
            throw new Error(err.message || 'Əməliyyat uğursuz oldu');
        }
        modalInstance.hide();
        showAlert(isEdit ? 'Məlumat yeniləndi.' : 'Yeni məlumat əlavə edildi.');
        await loadData();
    } catch (error) {
        showAlert(error.message, 'danger');
    } finally {
        setLoading(false);
    }
}

async function deleteRow(id) {
    if (!confirm('Bu qeydi silmək istədiyinizə əminsiniz?')) {
        return;
    }
    setLoading(true);
    try {
        const response = await fetch(`${currentEntity.api}/${id}`, { method: 'DELETE' });
        if (!response.ok) {
            const err = await response.json().catch(() => ({}));
            throw new Error(err.message || 'Silinmə uğursuz oldu');
        }
        showAlert('Qeyd silindi.');
        await loadData();
    } catch (error) {
        showAlert(error.message, 'danger');
    } finally {
        setLoading(false);
    }
}

function toInputDate(value) {
    if (!value) {
        return '';
    }
    return String(value).substring(0, 10);
}

function toInputDateTime(value) {
    if (!value) {
        return '';
    }
    const normalized = String(value).replace(' ', 'T');
    return normalized.length >= 16 ? normalized.substring(0, 16) : normalized;
}

function escapeHtml(text) {
    return String(text)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

function escapeAttr(text) {
    return escapeHtml(text).replaceAll('\n', ' ');
}
