const JBL_PROSCAN_CARD_VERSION = "1.2.3";

const JBL_STRINGS = {
  fr: {
    card_name: "JBL ProScan",
    card_description: "Qualité de l’eau et historique JBL ProScan.",
    title_default: "Bassin — JBL ProScan",
    entity_required: "Sélectionnez le capteur Historique JBL ProScan.",
    entity_missing: "Entité introuvable",
    no_data: "Aucune analyse disponible",
    last_analysis: "Dernière analyse",
    today: "aujourd’hui",
    yesterday: "hier",
    days_ago: "il y a {days} jours",
    unknown_date: "date inconnue",
    good: "Bon",
    warning: "À surveiller",
    bad: "Mauvais",
    neutral: "Information",
    analyses: "analyses",
    analysis: "analyse",
    history: "Historique",
    latest_values: "Dernières mesures",
    measurements_shown: "{count} mesures affichées",
    preserved: "Les signes > et < sont conservés.",
    local_rating: "Évaluation locale configurable.",
    no_chart: "Pas assez de données pour tracer le graphique.",
    chlorine: "Chlore",
    editor_entity: "Entité Historique",
    editor_title: "Titre",
    editor_measurements: "Nombre de mesures",
    editor_show_refresh: "Afficher le bouton d’actualisation", editor_show_units: "Afficher les unités", editor_show_co2: "Afficher le CO₂",
    editor_warning: "Avertissement après (jours)",
    editor_critical: "Critique après (jours)",
    editor_compact: "Mode compact",
    editor_help_entity: "Choisissez le capteur JBL ProScan dont l’attribut measurements contient l’historique.",
    age_warning: "Analyse ancienne",
    source: "Source",
    refresh: "Actualiser", refreshing: "Actualisation…", refresh_error: "Échec de l’actualisation",
    editor_colors: "Couleurs", editor_icons: "Icônes", editor_accent_color: "Couleur principale", editor_good_color: "Couleur Bon", editor_warning_color: "Couleur À surveiller", editor_bad_color: "Couleur Mauvais", editor_header_icon: "Icône d’en-tête", editor_refresh_icon: "Icône d’actualisation", editor_metric_icons: "Icônes des paramètres"
  },
  en: {
    card_name: "JBL ProScan", card_description: "Water quality and JBL ProScan history.", title_default: "Pond — JBL ProScan",
    entity_required: "Select the JBL ProScan History sensor.", entity_missing: "Entity not found", no_data: "No analysis available", last_analysis: "Latest analysis",
    today: "today", yesterday: "yesterday", days_ago: "{days} days ago", unknown_date: "unknown date", good: "Good", warning: "Watch", bad: "Poor", neutral: "Information",
    analyses: "analyses", analysis: "analysis", history: "History", latest_values: "Latest readings", measurements_shown: "{count} measurements shown", preserved: "> and < signs are preserved.", local_rating: "Configurable local rating.", no_chart: "Not enough data to draw the chart.", chlorine: "Chlorine",
    editor_entity: "History entity", editor_title: "Title", editor_measurements: "Number of measurements", editor_show_refresh: "Show refresh button", editor_show_units: "Show units", editor_show_co2: "Show CO₂", editor_warning: "Warning after (days)", editor_critical: "Critical after (days)", editor_compact: "Compact mode", editor_help_entity: "Choose the JBL ProScan sensor whose measurements attribute contains the history.", age_warning: "Old analysis", source: "Source", refresh: "Refresh", refreshing: "Refreshing…", refresh_error: "Refresh failed", editor_colors: "Colors", editor_icons: "Icons", editor_accent_color: "Accent color", editor_good_color: "Good color", editor_warning_color: "Warning color", editor_bad_color: "Poor color", editor_header_icon: "Header icon", editor_refresh_icon: "Refresh icon", editor_metric_icons: "Parameter icons"
  },
  de: {
    card_name: "JBL ProScan", card_description: "Wasserqualität und JBL-ProScan-Verlauf.", title_default: "Teich — JBL ProScan", entity_required: "Wähle den JBL-ProScan-Verlaufssensor.", entity_missing: "Entität nicht gefunden", no_data: "Keine Analyse verfügbar", last_analysis: "Letzte Analyse", today: "heute", yesterday: "gestern", days_ago: "vor {days} Tagen", unknown_date: "Datum unbekannt", good: "Gut", warning: "Beobachten", bad: "Schlecht", neutral: "Information", analyses: "Analysen", analysis: "Analyse", history: "Verlauf", latest_values: "Letzte Messwerte", measurements_shown: "{count} Messungen angezeigt", preserved: "Die Zeichen > und < bleiben erhalten.", local_rating: "Konfigurierbare lokale Bewertung.", no_chart: "Nicht genügend Daten für das Diagramm.", chlorine: "Chlor", editor_entity: "Verlaufsentität", editor_title: "Titel", editor_measurements: "Anzahl der Messungen", editor_show_refresh: "Aktualisierungsschaltfläche anzeigen", editor_show_units: "Einheiten anzeigen", editor_show_co2: "CO₂ anzeigen", editor_warning: "Warnung nach (Tagen)", editor_critical: "Kritisch nach (Tagen)", editor_compact: "Kompaktmodus", editor_help_entity: "Wähle den Sensor mit dem Attribut measurements.", age_warning: "Alte Analyse", source: "Quelle", refresh: "Aktualisieren", refreshing: "Wird aktualisiert…", refresh_error: "Aktualisierung fehlgeschlagen", editor_colors: "Farben", editor_icons: "Symbole", editor_accent_color: "Akzentfarbe", editor_good_color: "Farbe Gut", editor_warning_color: "Farbe Beobachten", editor_bad_color: "Farbe Schlecht", editor_header_icon: "Kopfsymbol", editor_refresh_icon: "Aktualisierungssymbol", editor_metric_icons: "Parametersymbole"
  },
  es: {
    card_name: "JBL ProScan", card_description: "Calidad del agua e historial JBL ProScan.", title_default: "Estanque — JBL ProScan", entity_required: "Selecciona el sensor Historial JBL ProScan.", entity_missing: "Entidad no encontrada", no_data: "No hay análisis disponibles", last_analysis: "Último análisis", today: "hoy", yesterday: "ayer", days_ago: "hace {days} días", unknown_date: "fecha desconocida", good: "Bueno", warning: "Vigilar", bad: "Malo", neutral: "Información", analyses: "análisis", analysis: "análisis", history: "Historial", latest_values: "Últimas mediciones", measurements_shown: "{count} mediciones mostradas", preserved: "Se conservan los signos > y <.", local_rating: "Evaluación local configurable.", no_chart: "No hay suficientes datos para el gráfico.", chlorine: "Cloro", editor_entity: "Entidad de historial", editor_title: "Título", editor_measurements: "Número de mediciones", editor_show_refresh: "Mostrar botón de actualización", editor_show_units: "Mostrar unidades", editor_show_co2: "Mostrar CO₂", editor_warning: "Aviso tras (días)", editor_critical: "Crítico tras (días)", editor_compact: "Modo compacto", editor_help_entity: "Selecciona el sensor cuyo atributo measurements contiene el historial.", age_warning: "Análisis antiguo", source: "Fuente", refresh: "Actualizar", refreshing: "Actualizando…", refresh_error: "Error al actualizar", editor_colors: "Colores", editor_icons: "Iconos", editor_accent_color: "Color principal", editor_good_color: "Color Bueno", editor_warning_color: "Color Vigilar", editor_bad_color: "Color Malo", editor_header_icon: "Icono de cabecera", editor_refresh_icon: "Icono de actualización", editor_metric_icons: "Iconos de parámetros"
  },
  it: {
    card_name: "JBL ProScan", card_description: "Qualità dell’acqua e storico JBL ProScan.", title_default: "Laghetto — JBL ProScan", entity_required: "Seleziona il sensore Storico JBL ProScan.", entity_missing: "Entità non trovata", no_data: "Nessuna analisi disponibile", last_analysis: "Ultima analisi", today: "oggi", yesterday: "ieri", days_ago: "{days} giorni fa", unknown_date: "data sconosciuta", good: "Buono", warning: "Da controllare", bad: "Cattivo", neutral: "Informazione", analyses: "analisi", analysis: "analisi", history: "Storico", latest_values: "Ultime misure", measurements_shown: "{count} misurazioni visualizzate", preserved: "I segni > e < vengono conservati.", local_rating: "Valutazione locale configurabile.", no_chart: "Dati insufficienti per il grafico.", chlorine: "Cloro", editor_entity: "Entità storico", editor_title: "Titolo", editor_measurements: "Numero di misurazioni", editor_show_refresh: "Mostra pulsante di aggiornamento", editor_show_units: "Mostra unità", editor_show_co2: "Mostra CO₂", editor_warning: "Avviso dopo (giorni)", editor_critical: "Critico dopo (giorni)", editor_compact: "Modalità compatta", editor_help_entity: "Seleziona il sensore con l’attributo measurements.", age_warning: "Analisi datata", source: "Fonte", refresh: "Aggiorna", refreshing: "Aggiornamento…", refresh_error: "Aggiornamento non riuscito", editor_colors: "Colori", editor_icons: "Icone", editor_accent_color: "Colore principale", editor_good_color: "Colore Buono", editor_warning_color: "Colore Da controllare", editor_bad_color: "Colore Cattivo", editor_header_icon: "Icona intestazione", editor_refresh_icon: "Icona aggiornamento", editor_metric_icons: "Icone dei parametri"
  },
  nl: {
    card_name: "JBL ProScan", card_description: "Waterkwaliteit en JBL ProScan-geschiedenis.", title_default: "Vijver — JBL ProScan", entity_required: "Selecteer de JBL ProScan-geschiedenissensor.", entity_missing: "Entiteit niet gevonden", no_data: "Geen analyse beschikbaar", last_analysis: "Laatste analyse", today: "vandaag", yesterday: "gisteren", days_ago: "{days} dagen geleden", unknown_date: "datum onbekend", good: "Goed", warning: "Controleren", bad: "Slecht", neutral: "Informatie", analyses: "analyses", analysis: "analyse", history: "Geschiedenis", latest_values: "Laatste metingen", measurements_shown: "{count} metingen weergegeven", preserved: "De tekens > en < blijven behouden.", local_rating: "Configureerbare lokale beoordeling.", no_chart: "Onvoldoende gegevens voor de grafiek.", chlorine: "Chloor", editor_entity: "Geschiedenis-entiteit", editor_title: "Titel", editor_measurements: "Aantal metingen", editor_show_refresh: "Vernieuwknop tonen", editor_show_units: "Eenheden tonen", editor_show_co2: "CO₂ tonen", editor_warning: "Waarschuwing na (dagen)", editor_critical: "Kritiek na (dagen)", editor_compact: "Compacte modus", editor_help_entity: "Selecteer de sensor met het attribuut measurements.", age_warning: "Oude analyse", source: "Bron", refresh: "Vernieuwen", refreshing: "Vernieuwen…", refresh_error: "Vernieuwen mislukt", editor_colors: "Kleuren", editor_icons: "Pictogrammen", editor_accent_color: "Accentkleur", editor_good_color: "Kleur Goed", editor_warning_color: "Kleur Controleren", editor_bad_color: "Kleur Slecht", editor_header_icon: "Koptekstpictogram", editor_refresh_icon: "Vernieuwpictogram", editor_metric_icons: "Parameterpictogrammen"
  },
  pt: {
    card_name: "JBL ProScan", card_description: "Qualidade da água e histórico JBL ProScan.", title_default: "Lago — JBL ProScan", entity_required: "Selecione o sensor Histórico JBL ProScan.", entity_missing: "Entidade não encontrada", no_data: "Nenhuma análise disponível", last_analysis: "Última análise", today: "hoje", yesterday: "ontem", days_ago: "há {days} dias", unknown_date: "data desconhecida", good: "Bom", warning: "A vigiar", bad: "Mau", neutral: "Informação", analyses: "análises", analysis: "análise", history: "Histórico", latest_values: "Últimas medições", measurements_shown: "{count} medições apresentadas", preserved: "Os sinais > e < são preservados.", local_rating: "Avaliação local configurável.", no_chart: "Dados insuficientes para o gráfico.", chlorine: "Cloro", editor_entity: "Entidade de histórico", editor_title: "Título", editor_measurements: "Número de medições", editor_show_refresh: "Mostrar botão de atualização", editor_show_units: "Mostrar unidades", editor_show_co2: "Mostrar CO₂", editor_warning: "Aviso após (dias)", editor_critical: "Crítico após (dias)", editor_compact: "Modo compacto", editor_help_entity: "Selecione o sensor cujo atributo measurements contém o histórico.", age_warning: "Análise antiga", source: "Fonte", refresh: "Atualizar", refreshing: "A atualizar…", refresh_error: "Falha ao atualizar", editor_colors: "Cores", editor_icons: "Ícones", editor_accent_color: "Cor principal", editor_good_color: "Cor Bom", editor_warning_color: "Cor A vigiar", editor_bad_color: "Cor Mau", editor_header_icon: "Ícone do cabeçalho", editor_refresh_icon: "Ícone de atualização", editor_metric_icons: "Ícones dos parâmetros"
  }
};

const JBL_EXTRA_STRINGS = {
  fr: { editor_history_source:"Source du graphique", source_auto:"Automatique", source_jbl:"Historique JBL", source_statistics:"Statistiques Home Assistant", editor_statistics_days:"Période des statistiques (jours)", editor_statistics_period:"Agrégation", period_hour:"Heure", period_day:"Jour", editor_show_recommended:"Afficher la plage recommandée", recommended_range:"Plage recommandée", statistics_source:"Statistiques Home Assistant", value_label:"Valeur", evolution:"Évolution", since_previous:"depuis l’analyse précédente", minimum:"Minimum", maximum:"Maximum", average:"Moyenne", stable:"Stable" },
  en: { editor_history_source:"Chart data source", source_auto:"Automatic", source_jbl:"JBL history", source_statistics:"Home Assistant statistics", editor_statistics_days:"Statistics period (days)", editor_statistics_period:"Aggregation", period_hour:"Hour", period_day:"Day", editor_show_recommended:"Show recommended range", recommended_range:"Recommended range", statistics_source:"Home Assistant statistics", value_label:"Value", evolution:"Change", since_previous:"since previous analysis", minimum:"Minimum", maximum:"Maximum", average:"Average", stable:"Stable" },
  de: { editor_history_source:"Diagramm-Datenquelle", source_auto:"Automatisch", source_jbl:"JBL-Verlauf", source_statistics:"Home-Assistant-Statistiken", editor_statistics_days:"Statistikzeitraum (Tage)", editor_statistics_period:"Aggregation", period_hour:"Stunde", period_day:"Tag", editor_show_recommended:"Empfohlenen Bereich anzeigen", recommended_range:"Empfohlener Bereich", statistics_source:"Home-Assistant-Statistiken", value_label:"Wert", evolution:"Änderung", since_previous:"seit der vorherigen Analyse", minimum:"Minimum", maximum:"Maximum", average:"Durchschnitt", stable:"Stabil" },
  es: { editor_history_source:"Fuente de datos del gráfico", source_auto:"Automático", source_jbl:"Historial JBL", source_statistics:"Estadísticas de Home Assistant", editor_statistics_days:"Periodo estadístico (días)", editor_statistics_period:"Agregación", period_hour:"Hora", period_day:"Día", editor_show_recommended:"Mostrar rango recomendado", recommended_range:"Rango recomendado", statistics_source:"Estadísticas de Home Assistant", value_label:"Valor", evolution:"Evolución", since_previous:"desde el análisis anterior", minimum:"Mínimo", maximum:"Máximo", average:"Media", stable:"Estable" },
  it: { editor_history_source:"Fonte dati del grafico", source_auto:"Automatica", source_jbl:"Storico JBL", source_statistics:"Statistiche Home Assistant", editor_statistics_days:"Periodo statistiche (giorni)", editor_statistics_period:"Aggregazione", period_hour:"Ora", period_day:"Giorno", editor_show_recommended:"Mostra intervallo consigliato", recommended_range:"Intervallo consigliato", statistics_source:"Statistiche Home Assistant", value_label:"Valore", evolution:"Variazione", since_previous:"dall’analisi precedente", minimum:"Minimo", maximum:"Massimo", average:"Media", stable:"Stabile" },
  nl: { editor_history_source:"Gegevensbron grafiek", source_auto:"Automatisch", source_jbl:"JBL-geschiedenis", source_statistics:"Home Assistant-statistieken", editor_statistics_days:"Statistiekperiode (dagen)", editor_statistics_period:"Aggregatie", period_hour:"Uur", period_day:"Dag", editor_show_recommended:"Aanbevolen bereik tonen", recommended_range:"Aanbevolen bereik", statistics_source:"Home Assistant-statistieken", value_label:"Waarde", evolution:"Verandering", since_previous:"sinds de vorige analyse", minimum:"Minimum", maximum:"Maximum", average:"Gemiddelde", stable:"Stabiel" },
  pt: { editor_history_source:"Fonte de dados do gráfico", source_auto:"Automático", source_jbl:"Histórico JBL", source_statistics:"Estatísticas do Home Assistant", editor_statistics_days:"Período estatístico (dias)", editor_statistics_period:"Agregação", period_hour:"Hora", period_day:"Dia", editor_show_recommended:"Mostrar intervalo recomendado", recommended_range:"Intervalo recomendado", statistics_source:"Estatísticas do Home Assistant", value_label:"Valor", evolution:"Evolução", since_previous:"desde a análise anterior", minimum:"Mínimo", maximum:"Máximo", average:"Média", stable:"Estável" }
};

function langCode(hass) {
  const raw = hass?.locale?.language || document.documentElement.lang || navigator.language || "en";
  const code = String(raw).toLowerCase().split("-")[0];
  return JBL_STRINGS[code] ? code : "en";
}
function t(hass, key, vars = {}) {
  const lang = langCode(hass);
  let value = JBL_EXTRA_STRINGS[lang]?.[key] ?? JBL_STRINGS[lang]?.[key] ?? JBL_EXTRA_STRINGS.en[key] ?? JBL_STRINGS.en[key] ?? key;
  for (const [name, replacement] of Object.entries(vars)) value = value.replaceAll(`{${name}}`, String(replacement));
  return value;
}

class JBLProScanCardEditor extends HTMLElement {
  constructor() { super(); this.attachShadow({ mode: "open" }); }
  set hass(value) {
    this._hass = value;
    // Home Assistant updates `hass` frequently. Do not rebuild the editor
    // while the user is typing, otherwise the focused native input is replaced.
    const active = this.shadowRoot?.activeElement;
    if (active && (active.matches?.("input, select, textarea") || active.closest?.("ha-selector"))) return;
    this._render();
  }
  setConfig(value) {
    const next = { ...value };
    if (next.measurements == null && next.points != null) {
      next.measurements = next.points;
    }
    const changed = JSON.stringify(this._config) !== JSON.stringify(next);
    this._config = next;
    if (!changed) return;
    // Home Assistant sends config back after each keystroke. Keep the
    // current input mounted so typing does not lose focus.
    const active = this.shadowRoot?.activeElement;
    if (active && (active.matches?.("input, select, textarea") || active.closest?.("ha-selector"))) return;
    this._render();
  }
  _emit(patch) {
    this._config = { ...this._config, ...patch };
    delete this._config.points;
    this.dispatchEvent(new CustomEvent("config-changed", {
      detail: { config: (() => {
        const config = { ...this._config };
        // Preserve the width chosen in the Sections editor, but never
        // reintroduce a fixed height that could overlap the next card.
        if (config.grid_options) {
          const grid = { ...config.grid_options };
          delete grid.rows;
          delete grid.min_rows;
          if (Object.keys(grid).length) config.grid_options = grid;
          else delete config.grid_options;
        }
        return config;
      })() }, bubbles: true, composed: true
    }));
  }
  _render() {
    if (!this._hass || !this._config) return;
    const candidates = Object.values(this._hass.states)
      .filter(state => state.entity_id.startsWith("sensor.") && Array.isArray(state.attributes?.measurements))
      .sort((a, b) => (a.attributes.friendly_name || a.entity_id).localeCompare(b.attributes.friendly_name || b.entity_id));
    const options = candidates.map(state => {
      const label = state.attributes.friendly_name || state.entity_id;
      return `<option value="${state.entity_id}" ${state.entity_id === this._config.entity ? "selected" : ""}>${label}</option>`;
    }).join("");
    const count = Math.min(1000, Math.max(2, Number(this._config.measurements ?? 20) || 20));
    this.shadowRoot.innerHTML = `
      <style>
        :host{display:block;color:var(--primary-text-color)}
        .help{color:var(--secondary-text-color);font-size:13px;line-height:1.4;margin:0 0 16px}
        .grid{display:grid;gap:16px}
        label{display:grid;gap:6px;font-size:14px;font-weight:500}
        input,select{box-sizing:border-box;width:100%;min-height:48px;padding:0 12px;border:1px solid var(--divider-color);border-radius:12px;background:var(--card-background-color);color:var(--primary-text-color);font:inherit}
        input:focus,select:focus{outline:2px solid var(--primary-color);outline-offset:1px}
        .switch{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:44px}
        .switch input{width:22px;min-height:22px;accent-color:var(--accent)}
        .two{display:grid;grid-template-columns:1fr 1fr;gap:12px}.four{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.icon-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}h3{font-size:15px;margin:8px 0 -4px;color:var(--primary-text-color)}ha-selector{display:block;width:100%;min-height:48px}
        @media(max-width:520px){.two,.four,.icon-grid{grid-template-columns:1fr}}
      </style>
      <p class="help">${t(this._hass,"editor_help_entity")}</p>
      <div class="grid">
        <label>${t(this._hass,"editor_entity")}<select id="entity"><option value=""></option>${options}</select></label>
        <label>${t(this._hass,"editor_title")}<input id="title" type="text" value="${this._config.title || ""}"></label>
        <label>${t(this._hass,"editor_measurements")}<input id="measurements" type="number" inputmode="numeric" min="2" max="1000" step="1" value="${count}"></label>
        <div class="two">
          <label>${t(this._hass,"editor_history_source")}<select id="history_source"><option value="auto" ${(this._config.history_source||"auto")==="auto"?"selected":""}>${t(this._hass,"source_auto")}</option><option value="jbl" ${this._config.history_source==="jbl"?"selected":""}>${t(this._hass,"source_jbl")}</option><option value="statistics" ${this._config.history_source==="statistics"?"selected":""}>${t(this._hass,"source_statistics")}</option></select></label>
          <label>${t(this._hass,"editor_statistics_days")}<input id="statistics_days" type="number" min="1" max="1825" step="1" value="${Number(this._config.statistics_days||365)}"></label>
        </div>
        <label>${t(this._hass,"editor_statistics_period")}<select id="statistics_period"><option value="hour" ${(this._config.statistics_period||"day")==="hour"?"selected":""}>${t(this._hass,"period_hour")}</option><option value="day" ${(this._config.statistics_period||"day")==="day"?"selected":""}>${t(this._hass,"period_day")}</option></select></label>
        <div class="two">
          <label>${t(this._hass,"editor_warning")}<input id="warning" type="number" inputmode="numeric" min="1" max="365" step="1" value="${Number(this._config.stale_warning_days ?? 14)}"></label>
          <label>${t(this._hass,"editor_critical")}<input id="critical" type="number" inputmode="numeric" min="1" max="730" step="1" value="${Number(this._config.stale_critical_days ?? 30)}"></label>
        </div>
        <label class="switch"><span>${t(this._hass,"editor_show_co2")}</span><input id="show_co2" type="checkbox" ${this._config.show_co2 !== false ? "checked" : ""}></label>
        <label class="switch"><span>${t(this._hass,"editor_show_refresh")}</span><input id="show_refresh" type="checkbox" ${this._config.show_refresh !== false ? "checked" : ""}></label>
        <label class="switch"><span>${t(this._hass,"editor_show_units")}</span><input id="show_units" type="checkbox" ${this._config.show_units !== false ? "checked" : ""}></label>
        <label class="switch"><span>${t(this._hass,"editor_show_recommended")}</span><input id="show_recommended" type="checkbox" ${this._config.show_recommended !== false ? "checked" : ""}></label>
        <label class="switch"><span>${t(this._hass,"editor_compact")}</span><input id="compact" type="checkbox" ${this._config.compact ? "checked" : ""}></label>
        <h3>${t(this._hass,"editor_colors")}</h3>
        <div class="four">
          <label>${t(this._hass,"editor_accent_color")}<ha-selector id="accent_color"></ha-selector></label>
          <label>${t(this._hass,"editor_good_color")}<ha-selector id="good_color"></ha-selector></label>
          <label>${t(this._hass,"editor_warning_color")}<ha-selector id="warning_color"></ha-selector></label>
          <label>${t(this._hass,"editor_bad_color")}<ha-selector id="bad_color"></ha-selector></label>
        </div>
        <h3>${t(this._hass,"editor_icons")}</h3>
        <div class="two">
          <label>${t(this._hass,"editor_header_icon")}<ha-selector id="header_icon"></ha-selector></label>
          <label>${t(this._hass,"editor_refresh_icon")}<ha-selector id="refresh_icon"></ha-selector></label>
        </div>
        <label>${t(this._hass,"editor_metric_icons")}</label>
        <div class="icon-grid">
          ${["ph","kh","gh","no2","no3","co2","chlorine"].map(key => `<label>${key.toUpperCase()}<ha-selector data-icon-key="${key}"></ha-selector></label>`).join("")}
        </div>
      </div>`;
    const listen = (id, event, fn) => this.shadowRoot.getElementById(id).addEventListener(event, e => this._emit(fn(e.target)));
    listen("entity", "change", el => ({ entity: el.value }));
    listen("title", "input", el => ({ title: el.value }));
    listen("measurements", "change", el => ({ measurements: Math.min(1000, Math.max(2, Number(el.value) || 20)) }));
    listen("history_source", "change", el => ({ history_source: el.value }));
    listen("statistics_days", "change", el => ({ statistics_days: Math.min(1825, Math.max(1, Number(el.value) || 365)) }));
    listen("statistics_period", "change", el => ({ statistics_period: el.value }));
    listen("warning", "change", el => ({ stale_warning_days: Math.max(1, Number(el.value) || 14) }));
    listen("critical", "change", el => ({ stale_critical_days: Math.max(1, Number(el.value) || 30) }));
    listen("show_co2", "change", el => ({ show_co2: el.checked }));
    listen("show_refresh", "change", el => ({ show_refresh: el.checked }));
    listen("show_units", "change", el => ({ show_units: el.checked }));
    listen("show_recommended", "change", el => ({ show_recommended: el.checked }));
    listen("compact", "change", el => ({ compact: el.checked }));
    const hexToRgb = value => {
      const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value || "");
      return match ? [parseInt(match[1],16), parseInt(match[2],16), parseInt(match[3],16)] : undefined;
    };
    const rgbToHex = value => Array.isArray(value) && value.length === 3
      ? `#${value.map(part => Math.max(0,Math.min(255,Number(part)||0)).toString(16).padStart(2,"0")).join("")}`
      : undefined;
    const setupColorSelector = (id, key, fallback) => {
      const selector = this.shadowRoot.getElementById(id);
      selector.hass = this._hass;
      selector.selector = { color_rgb: {} };
      selector.value = hexToRgb(this._config.colors?.[key] || fallback);
      selector.addEventListener("value-changed", event => {
        const color = rgbToHex(event.detail?.value);
        if (color) this._emit({ colors: { ...(this._config.colors || {}), [key]: color } });
      });
    };
    setupColorSelector("accent_color", "accent", "#0397c5");
    setupColorSelector("good_color", "good", "#43a047");
    setupColorSelector("warning_color", "warning", "#f9a825");
    setupColorSelector("bad_color", "bad", "#e53935");
    const setupIconSelector = (selector, key, fallback = "") => {
      selector.hass = this._hass;
      selector.selector = { icon: { placeholder: fallback || "mdi:shape-outline" } };
      selector.value = this._config.icons?.[key] || fallback || undefined;
      selector.addEventListener("value-changed", event => {
        const value = String(event.detail?.value || "").trim();
        this._emit({ icons: { ...(this._config.icons || {}), [key]: value } });
      });
    };
    setupIconSelector(this.shadowRoot.getElementById("header_icon"), "header", "mdi:water-check");
    setupIconSelector(this.shadowRoot.getElementById("refresh_icon"), "refresh", "mdi:refresh");
    const iconFallbacks = { ph:"mdi:ph", kh:"mdi:water-outline", gh:"mdi:water-opacity", no2:"mdi:alert-decagram-outline", no3:"mdi:leaf-circle-outline", co2:"mdi:molecule-co2", chlorine:"mdi:flask-outline" };
    this.shadowRoot.querySelectorAll("[data-icon-key]").forEach(selector => setupIconSelector(selector, selector.dataset.iconKey, iconFallbacks[selector.dataset.iconKey]));
  }
}
if (!customElements.get("jbl-proscan-card-editor")) customElements.define("jbl-proscan-card-editor", JBLProScanCardEditor);

class JBLProScanCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode:"open" });
    this._selected = "ph";
    this._statistics = {};
    this._statisticsTokens = {};
    this._period = "all";
  }
  static async getConfigElement() { await customElements.whenDefined("ha-form"); return document.createElement("jbl-proscan-card-editor"); }
  static getStubConfig(hass) {
    const found = hass ? Object.values(hass.states).find(s => s.entity_id.startsWith("sensor.") && Array.isArray(s.attributes?.measurements)) : null;
    return { entity:found?.entity_id || "", title:t(hass,"title_default"), measurements:20, history_source:"auto", statistics_days:365, statistics_period:"day", show_recommended:true, show_co2:true, show_units:true, show_refresh:true, compact:false, stale_warning_days:14, stale_critical_days:30, colors:{}, icons:{}, ranges:{} };
  }
  setConfig(config) {
    if (!config?.entity) throw new Error(t(this._hass,"entity_required"));
    this.config = { title:null,measurements:20,history_source:"auto",statistics_days:365,statistics_period:"day",show_recommended:true,show_co2:true,show_units:true,show_refresh:true,compact:false,stale_warning_days:14,stale_critical_days:30,colors:{},icons:{},ranges:{},...config };
    if (this.config.measurements == null && this.config.points != null) this.config.measurements = this.config.points;
  }
  set hass(value) {
    const previousHass = this._hass;
    this._hass = value;

    // Home Assistant replaces `hass` very frequently, even when this card's
    // entity did not change. Rebuilding the whole shadow DOM on every update
    // can make Safari/iOS move the dashboard scroll position. Only rerender
    // when the JBL history entity itself changed (or on the initial render).
    const entityId = this.config?.entity;
    const previousState = entityId ? previousHass?.states?.[entityId] : undefined;
    const currentState = entityId ? value?.states?.[entityId] : undefined;
    const shouldRender = !previousHass || previousState !== currentState || !this.shadowRoot?.firstChild;
    if (!shouldRender) return;

    this._render();
    this._maybeLoadStatistics(this._selected);
  }
  getCardSize() { return this.config?.compact ? 8 : 12; }
  getGridOptions() {
    // No rows/min_rows: let Home Assistant size the card from its content.
    return {
      columns: 12,
      min_columns: 4
    };
  }

  _escape(value) { return String(value ?? "").replace(/[&<>\"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }
  _number(raw) { const m=String(raw??"").trim().replace(",",".").match(/^\s*([<>]=?)?\s*(-?\d+(?:\.\d+)?)/); return m?{value:Number(m[2]),comparator:m[1]||""}:{value:null,comparator:""}; }
  _locale() { return this._hass?.locale?.language || navigator.language || "en"; }
  _date(value, short=false) { const d=new Date(value); if(Number.isNaN(d.getTime())) return "—"; return new Intl.DateTimeFormat(this._locale(), short?{day:"2-digit",month:"short"}:{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(d); }
  _days(value) { const time=new Date(value).getTime(); return Number.isFinite(time)?Math.max(0,Math.floor((Date.now()-time)/86400000)):null; }
  _ageText(days) { if(days===null)return t(this._hass,"unknown_date"); if(days===0)return t(this._hass,"today"); if(days===1)return t(this._hass,"yesterday"); return t(this._hass,"days_ago",{days}); }
  _ageStatus(days) { if(days===null)return "neutral"; if(days>=Number(this.config.stale_critical_days))return "bad"; if(days>=Number(this.config.stale_warning_days))return "warning"; return "good"; }
  _icon(key, fallback) { const value=this.config?.icons?.[key]; return /^mdi:[a-z0-9-]+$/i.test(String(value||""))?value:fallback; }
  _color(key, fallback) { const value=String(this.config?.colors?.[key]||"").trim(); return /^#[0-9a-f]{6}$/i.test(value)?value:fallback; }
  _unit(def) { return this.config?.show_units === false ? "" : (def.unit || ""); }
  _range(key, fallback) {
    const configured = this.config?.ranges?.[key];
    if (Array.isArray(configured) && configured.length === 2 && configured.every(Number.isFinite)) return configured;
    return fallback;
  }

  _periodLabel(value) {
    const lang=(this._locale().split("-")[0]||"en").toLowerCase();
    const labels={
      fr:{"1m":"1 mois","3m":"3 mois","1y":"1 an",all:"Tout"},
      en:{"1m":"1 month","3m":"3 months","1y":"1 year",all:"All"},
      de:{"1m":"1 Monat","3m":"3 Monate","1y":"1 Jahr",all:"Alles"},
      es:{"1m":"1 mes","3m":"3 meses","1y":"1 año",all:"Todo"},
      it:{"1m":"1 mese","3m":"3 mesi","1y":"1 anno",all:"Tutto"},
      nl:{"1m":"1 maand","3m":"3 maanden","1y":"1 jaar",all:"Alles"},
      pt:{"1m":"1 mês","3m":"3 meses","1y":"1 ano",all:"Tudo"}
    };
    return (labels[lang]||labels.en)[value]||value;
  }
  _periodDays() { return this._period === "1m" ? 31 : this._period === "3m" ? 92 : this._period === "1y" ? 366 : Math.min(1825, Math.max(1, Number(this.config.statistics_days) || 365)); }
  _filterPeriod(rows) {
    if (this._period === "all") return rows;
    const days=this._periodDays(), cutoff=Date.now()-days*86400000;
    return rows.filter(row => { const time=new Date(row.date).getTime(); return Number.isFinite(time) && time>=cutoff; });
  }
  _autoRows(history, key, stats) {
    const jbl = history
      .map(row => { const parsed=this._number(row[key]); return { date: row.date, value: parsed.value, comparator: parsed.comparator, source: "jbl" }; })
      .filter(row => Number.isFinite(Number(row.value)) && Number.isFinite(new Date(row.date).getTime()))
      .sort((a,b) => new Date(a.date) - new Date(b.date));
    const statRows = (stats || [])
      .filter(row => Number.isFinite(Number(row.value)) && Number.isFinite(new Date(row.date).getTime()))
      .map(row => ({ ...row, source: "statistics" }))
      .sort((a,b) => new Date(a.date) - new Date(b.date));

    // Actual JBL analyses are the canonical points. Statistics are used to extend
    // the timeline only when there is no JBL analysis for that UTC day.
    const jblDays = new Set(jbl.map(row => new Date(row.date).toISOString().slice(0,10)));
    const combined = [...jbl, ...statRows.filter(row => !jblDays.has(new Date(row.date).toISOString().slice(0,10)))]
      .sort((a,b) => new Date(a.date) - new Date(b.date));

    // Recorder daily statistics can repeat the same unchanged sensor state every
    // day. Collapse those repetitions so the chart still represents analyses and
    // meaningful changes instead of a flat point for every calendar day.
    const result = [];
    for (const row of combined) {
      const previous = result[result.length - 1];
      if (row.source === "statistics" && previous && Number(previous.value) === Number(row.value)) continue;
      result.push(row);
    }
    return result;
  }
  _comparison(history,key) {
    const valid=history.map(row=>({row,parsed:this._number(row[key])})).filter(x=>Number.isFinite(x.parsed.value));
    if(valid.length<2)return null;
    const current=valid[valid.length-1].parsed.value, previous=valid[valid.length-2].parsed.value, delta=current-previous;
    return {current,previous,delta};
  }
  _formatDelta(value, def) {
    if(!Number.isFinite(value))return "";
    const abs=Math.abs(value); const decimals=abs<1?2:1;
    const formatted=new Intl.NumberFormat(this._locale(),{maximumFractionDigits:decimals}).format(abs);
    if(Math.abs(value)<1e-9)return t(this._hass,"stable");
    return `${value>0?"▲":"▼"} ${value>0?"+":"−"}${formatted}${this._unit(def)?` ${this._unit(def)}`:""}`;
  }
  _tooltip(row, def, previous) {
    const val=Number(row.value);
    const unit=this._unit(def);
    const format=value=>new Intl.NumberFormat(this._locale(),{maximumFractionDigits:2}).format(Number(value));
    const valueText=`${format(val)}${unit?` ${unit}`:""}`;
    const blocks=[`<div class="tt-date">${this._escape(this._date(row.date))}</div>`,`<div class="tt-label">${t(this._hass,"value_label")}</div><div class="tt-value">${this._escape(valueText)}</div>`];
    if(Number.isFinite(previous)){
      const delta=val-previous;
      const cls=delta>0?"up":delta<0?"down":"stable";
      blocks.push(`<div class="tt-label">${t(this._hass,"evolution")}</div><div class="tt-change ${cls}"><strong>${this._escape(this._formatDelta(delta,def))}</strong><span>${t(this._hass,"since_previous")}</span></div>`);
    }
    const stats=[];
    if(Number.isFinite(row.min))stats.push(`${t(this._hass,"minimum")}: ${format(row.min)}${unit?` ${unit}`:""}`);
    if(Number.isFinite(row.mean))stats.push(`${t(this._hass,"average")}: ${format(row.mean)}${unit?` ${unit}`:""}`);
    if(Number.isFinite(row.max))stats.push(`${t(this._hass,"maximum")}: ${format(row.max)}${unit?` ${unit}`:""}`);
    if(stats.length)blocks.push(`<div class="tt-stats">${stats.map(item=>`<span>${this._escape(item)}</span>`).join("")}</div>`);
    if(def?.range)blocks.push(`<div class="tt-range"><span>${t(this._hass,"recommended_range")}</span><strong>${def.range[0]}–${def.range[1]}${unit?` ${unit}`:""}</strong></div>`);
    return blocks.join("");
  }
  _metricEntity(key) {
    const historyState = this._hass?.states?.[this.config.entity];
    const aquariumId = historyState?.attributes?.aquarium_id;
    return Object.values(this._hass?.states || {}).find(state =>
      state.entity_id.startsWith("sensor.") && state.attributes?.aquarium_id === aquariumId && state.attributes?.measurement_key === key
    )?.entity_id;
  }
  async _maybeLoadStatistics(key) {
    if (!this._hass || !this.config || this.config.history_source === "jbl") return;
    const entityId = this._metricEntity(key);
    if (!entityId) return;
    const days = this._periodDays();
    const period = this.config.statistics_period === "hour" ? "hour" : "day";
    const token = `${entityId}|${days}|${period}`;
    if (this._statisticsTokens[key] === token) return;
    this._statisticsTokens[key] = token;
    try {
      const end = new Date();
      const start = new Date(end.getTime() - days * 86400000);
      const response = await this._hass.callWS({
        type:"recorder/statistics_during_period",
        start_time:start.toISOString(), end_time:end.toISOString(),
        statistic_ids:[entityId], period, types:["mean","state","min","max"]
      });
      this._statistics[key] = (response?.[entityId] || []).map(row => ({
        date:new Date(row.start ?? row.end).toISOString(),
        value:Number.isFinite(row.mean) ? row.mean : row.state, mean:row.mean, min:row.min, max:row.max
      })).filter(row => Number.isFinite(row.value));
    } catch (error) {
      console.debug("JBL ProScan statistics unavailable", error);
      this._statistics[key] = [];
    }
    this._render();
  }
  _defs() {
    return {
      ph:{label:"pH",unit:"",icon:this._icon("ph","mdi:ph"),range:this._range("ph",[6.5,8.5]),warningRange:[6,9],status:x=>x.value===null?"neutral":x.value>=6.5&&x.value<=8.5?"good":x.value>=6&&x.value<=9?"warning":"bad"},
      kh:{label:"KH",unit:"°dKH",icon:this._icon("kh","mdi:water-outline"),range:this._range("kh",[5,15]),warningRange:[3,20],status:x=>x.value===null?"neutral":x.value>=5&&x.value<=15?"good":x.value>=3&&x.value<=20?"warning":"bad"},
      gh:{label:"GH",unit:"°dGH",icon:this._icon("gh","mdi:water-opacity"),range:this._range("gh",[4,21]),warningRange:[2,28],status:x=>x.value===null?"neutral":x.comparator.startsWith(">")&&x.value>=21?"warning":x.value>=4&&x.value<=21?"good":x.value>=2&&x.value<=28?"warning":"bad"},
      no2:{label:"NO₂",unit:"mg/L",icon:this._icon("no2","mdi:alert-decagram-outline"),range:this._range("no2",[0,0.25]),warningRange:[0,0.25],status:x=>x.value===null?"neutral":x.comparator.startsWith(">")&&x.value>=.25?"bad":x.value>=0&&x.value<=.25?"good":"bad"},
      no3:{label:"NO₃",unit:"mg/L",icon:this._icon("no3","mdi:leaf-circle-outline"),range:this._range("no3",[0,25]),warningRange:[0,50],status:x=>x.value===null?"neutral":x.comparator.startsWith(">")&&x.value>=50?"bad":x.value<=25?"good":x.value<=50?"warning":"bad"},
      co2:{label:"CO₂",unit:"mg/L",icon:this._icon("co2","mdi:molecule-co2"),status:()=>"neutral"},
      chlorine:{label:t(this._hass,"chlorine"),unit:"mg/L",icon:this._icon("chlorine","mdi:flask-outline"),range:this._range("chlorine",[0,0.8]),warningRange:[0,0.8],status:x=>x.value===null?"neutral":x.comparator.startsWith(">")&&x.value>=.8?"bad":x.value>=0&&x.value<=.8?"good":"bad"}
    };
  }
  _statusText(status) { return t(this._hass,status); }
  _overall(statuses, age) { const all=[...statuses,age].filter(v=>v!=="neutral"); return all.includes("bad")?"bad":all.includes("warning")?"warning":all.length?"good":"neutral"; }
  _chart(history,key,status) {
    const limit=Math.min(1000,Math.max(2,Number(this.config.measurements ?? this.config.points)||20));
    const stats=this._statistics?.[key]||[];
    const mode=this.config.history_source||"auto";
    const jblRows=history.map(row=>{const parsed=this._number(row[key]);return{date:row.date,value:parsed.value,comparator:parsed.comparator,source:"jbl"};});
    const sourceRows=mode==="statistics" ? stats.map(row=>({...row,source:"statistics"}))
      : mode==="jbl" ? jblRows
      : this._autoRows(history,key,stats);
    const filtered=this._filterPeriod(sourceRows);
    const rows=this._period === "all" ? filtered : filtered.slice(-limit);
    const useStats=mode==="statistics";
    const values=rows.map(r=>Number(r.value)); const valid=values.filter(Number.isFinite);
    if(valid.length<2)return `<div class="no-chart">${t(this._hass,"no_chart")}</div>`;
    const def=this._defs()[key]; const range=this.config.show_recommended===false?null:def?.range;
    const warningRange=this.config.show_recommended===false?null:def?.warningRange;
    const scaleValues=[...valid,...(range||[]),...(warningRange||[])];
    let min=Math.min(...scaleValues),max=Math.max(...scaleValues); if(min===max){min-=.5;max+=.5;}
    // Keep some visible space beyond the outer thresholds so red zones are visible
    // even when all recorded measurements are currently inside the recommended range.
    const span=max-min||1;
    const pad=Math.max(span*.10, key==="no2"?.05:key==="chlorine"?.12:.5); min-=pad; max+=pad;
    if((key==="no2"||key==="no3"||key==="chlorine")&&min<0)min=0;
    const W=600,H=this.config.compact?120:160,px=12,py=14;
    const x=i=>px+i*(W-2*px)/Math.max(1,rows.length-1); const y=v=>py+(max-v)*(H-2*py)/(max-min);
    const points=values.map((v,i)=>Number.isFinite(v)?`${x(i).toFixed(1)},${y(v).toFixed(1)}`:null).filter(Boolean);
    const area=points.length?`<polygon points="${px},${H-py} ${points.join(" ")} ${W-px},${H-py}"/>`:"";
    const severity={neutral:0,good:1,warning:2,bad:3};
    const rowStatus=row=>def.status({value:Number(row.value),comparator:row.comparator||""});
    const segments=[];
    for(let i=1;i<rows.length;i++){
      const a=Number(rows[i-1].value),b=Number(rows[i].value);
      if(!Number.isFinite(a)||!Number.isFinite(b))continue;
      const sa=rowStatus(rows[i-1]),sb=rowStatus(rows[i]);
      const segmentStatus=(severity[sb]??0)>(severity[sa]??0)?sb:sa;
      segments.push(`<line class="segment st-${segmentStatus}" x1="${x(i-1)}" y1="${y(a)}" x2="${x(i)}" y2="${y(b)}"></line>`);
    }
    const pointDots=rows.map((row,i)=>{
      if(!Number.isFinite(Number(row.value)))return "";
      const previous=i>0?Number(rows[i-1].value):null;
      const tip=encodeURIComponent(this._tooltip(row,def,previous));
      const pointStatus=rowStatus(row);
      return `<circle class="point st-${pointStatus}" cx="${x(i)}" cy="${y(Number(row.value))}" r="4"></circle><circle class="hit" data-tip="${tip}" cx="${x(i)}" cy="${y(Number(row.value))}" r="15"></circle>`;
    }).join("");
    const lastIndex=values.map(Number.isFinite).lastIndexOf(true); const dot=lastIndex>=0?`<circle class="last st-${rowStatus(rows[lastIndex])}" cx="${x(lastIndex)}" cy="${y(values[lastIndex])}" r="5"/>`:"";
    const zoneRect=(from,to,cls)=>{
      const lo=Math.max(min,Math.min(from,to)),hi=Math.min(max,Math.max(from,to));
      if(!(hi>lo))return "";
      return `<rect class="quality-zone ${cls}" x="${px}" y="${Math.min(y(lo),y(hi))}" width="${W-2*px}" height="${Math.abs(y(lo)-y(hi))}"/>`;
    };
    let bands="";
    if(range){
      const goodLo=range[0],goodHi=range[1];
      const warnLo=warningRange?.[0]??goodLo,warnHi=warningRange?.[1]??goodHi;
      // Paint from worst to best so exact threshold boundaries visually belong
      // to the recommended (green) band. NO2 and chlorine intentionally have
      // no orange interval because their warning range equals their good range.
      bands+=zoneRect(min,warnLo,"bad");
      bands+=zoneRect(warnLo,goodLo,"warning");
      bands+=zoneRect(goodLo,goodHi,"good");
      bands+=zoneRect(goodHi,warnHi,"warning");
      bands+=zoneRect(warnHi,max,"bad");
    }
    const firstDate=rows.find(r=>Number.isFinite(Number(r.value)))?.date; const lastDate=[...rows].reverse().find(r=>Number.isFinite(Number(r.value)))?.date;
    const middle=range?`${t(this._hass,"recommended_range")}: ${range[0]}–${range[1]} ${this._unit(def)}`:(useStats?t(this._hass,"statistics_source"):t(this._hass,"measurements_shown",{count:valid.length}));
    return `<div class="chart"><div class="chart-tooltip" role="tooltip"></div><svg class="chart-svg s-${status}" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none"><defs><linearGradient id="jblFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="currentColor" stop-opacity=".22"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></linearGradient></defs><g class="range">${bands}</g><g class="grid"><line x1="12" y1="${H*.33}" x2="588" y2="${H*.33}"/><line x1="12" y1="${H*.66}" x2="588" y2="${H*.66}"/></g><g class="area">${area}</g><g class="line"><g class="segments">${segments.join("")}</g>${pointDots}${dot}</g></svg><div class="axis"><span>${this._date(firstDate,true)}</span><span>${middle}</span><span>${this._date(lastDate,true)}</span></div></div>`;
  }
  _bind() {
    this.shadowRoot.querySelectorAll("button.metric").forEach(button=>button.addEventListener("click",()=>{this._selected=button.dataset.key;this._render();this._maybeLoadStatistics(this._selected);}));
    this.shadowRoot.querySelectorAll("button.period").forEach(button=>button.addEventListener("click",()=>{this._period=button.dataset.period;this._statisticsTokens={};this._render();this._maybeLoadStatistics(this._selected);}));
    const chart=this.shadowRoot.querySelector(".chart");
    const tooltip=chart?.querySelector(".chart-tooltip");
    const hideTooltip=()=>{if(tooltip)tooltip.classList.remove("visible");};
    chart?.querySelectorAll(".hit").forEach(hit=>{
      const showTooltip=(event)=>{
        if(!tooltip||!chart)return;
        let text=""; try{text=decodeURIComponent(hit.dataset.tip||"");}catch(_){text=hit.dataset.tip||"";}
        tooltip.innerHTML=text;
        const rect=chart.getBoundingClientRect();
        const clientX=event.clientX ?? (event.touches?.[0]?.clientX) ?? (rect.left+rect.width/2);
        const clientY=event.clientY ?? (event.touches?.[0]?.clientY) ?? (rect.top+rect.height/2);
        const pointX=Math.max(0,Math.min(rect.width,clientX-rect.left));
        const pointY=Math.max(0,Math.min(rect.height,clientY-rect.top));

        // Measure the tooltip first, then clamp it inside the chart/card.
        tooltip.classList.add("measuring");
        tooltip.classList.add("visible");
        const tipWidth=Math.min(tooltip.offsetWidth,Math.max(0,rect.width-16));
        const tipHeight=tooltip.offsetHeight;
        const margin=8;

        let left;
        if(rect.width<=520){
          left=(rect.width-tipWidth)/2;
        }else if(pointX<rect.width/2){
          left=Math.min(pointX+16,rect.width-tipWidth-margin);
        }else{
          left=Math.max(margin,pointX-tipWidth-16);
        }
        left=Math.max(margin,Math.min(rect.width-tipWidth-margin,left));

        let top;
        const above=pointY-tipHeight-14;
        const below=pointY+14;
        if(above>=margin){
          top=above;
        }else if(below+tipHeight<=rect.height-margin){
          top=below;
        }else{
          top=Math.max(margin,Math.min(rect.height-tipHeight-margin,(rect.height-tipHeight)/2));
        }

        tooltip.style.left=`${left}px`;
        tooltip.style.top=`${top}px`;
        tooltip.classList.remove("measuring");
      };
      hit.addEventListener("pointerenter",showTooltip);
      hit.addEventListener("pointermove",showTooltip);
      hit.addEventListener("pointerleave",hideTooltip);
      hit.addEventListener("click",event=>{event.preventDefault();showTooltip(event);});
    });
    chart?.addEventListener("pointerleave",hideTooltip);
    const refresh=this.shadowRoot.getElementById("refresh");
    if(refresh) refresh.addEventListener("click",async()=>{
      if(this._refreshing)return;
      this._refreshing=true;this._render();
      try {
        const state=this._hass.states[this.config.entity];
        const entryId=state?.attributes?.config_entry_id;
        await this._hass.callService("jbl_proscan","refresh",entryId?{config_entry_id:entryId}:{});
      } catch(error) {
        console.error("JBL ProScan refresh failed",error);
      } finally { this._refreshing=false;this._render(); }
    });
  }
  _scrollSnapshot() {
    const positions = [];
    const seen = new Set();

    const remember = (el) => {
      if (!el || seen.has(el)) return;
      seen.add(el);
      const top = Number(el.scrollTop || 0);
      const left = Number(el.scrollLeft || 0);
      if (top || left) positions.push({ el, top, left });
    };

    // Browser/document scrolling.
    remember(document.scrollingElement);
    remember(document.documentElement);
    remember(document.body);

    // Walk through Home Assistant's nested light/shadow DOM hosts. Sections
    // dashboards can be inside ha-scrollbar or another scroll container.
    let node = this;
    while (node) {
      remember(node);
      let parent = node.parentElement;
      if (parent) {
        node = parent;
        continue;
      }
      const root = node.getRootNode?.();
      node = root?.host || null;
    }

    return {
      positions,
      windowX: window.scrollX || 0,
      windowY: window.scrollY || 0
    };
  }

  _restoreScroll(snapshot) {
    if (!snapshot) return;

    const restore = () => {
      for (const item of snapshot.positions) {
        if (!item.el?.isConnected) continue;
        if (item.el.scrollTop !== item.top) item.el.scrollTop = item.top;
        if (item.el.scrollLeft !== item.left) item.el.scrollLeft = item.left;
      }

      // Safari/iOS may use the window scroll rather than document.scrollTop.
      if ((window.scrollY || 0) !== snapshot.windowY ||
          (window.scrollX || 0) !== snapshot.windowX) {
        window.scrollTo(snapshot.windowX, snapshot.windowY);
      }
    };

    // Restore immediately and once more after WebKit has completed layout.
    restore();
    requestAnimationFrame(() => restore());
  }

  _render() {
    const snapshot = this._scrollSnapshot();
    this._renderContent();
    this._restoreScroll(snapshot);
  }

  _renderContent() {
    if(!this._hass||!this.config)return;
    const state=this._hass.states[this.config.entity];
    if(!state){this.shadowRoot.innerHTML=`<ha-card><div class="message"><ha-icon icon="mdi:alert-circle-outline"></ha-icon>${t(this._hass,"entity_missing")}: ${this._escape(this.config.entity)}</div></ha-card>`;return;}
    const history=Array.isArray(state.attributes.measurements)?state.attributes.measurements:[];
    if(!history.length){this.shadowRoot.innerHTML=`<ha-card><div class="message"><ha-icon icon="mdi:water-alert-outline"></ha-icon>${t(this._hass,"no_data")}</div></ha-card>`;return;}
    const latest=history.at(-1),defs=this._defs();
    const keys=Object.keys(defs).filter(k=>k!=="co2"||this.config.show_co2!==false);
    if(!keys.includes(this._selected))this._selected=keys[0];
    const metrics=keys.map(key=>{const def=defs[key],raw=latest[key]??"—",status=def.status(this._number(raw));return{key,def,raw,status};});
    const ageDays=this._days(latest.date),ageStatus=this._ageStatus(ageDays),overall=this._overall(metrics.map(m=>m.status),ageStatus);
    const selected=metrics.find(m=>m.key===this._selected)||metrics[0];
    const title=this.config.title||t(this._hass,"title_default"),countLabel=history.length===1?t(this._hass,"analysis"):t(this._hass,"analyses");
    const tiles=metrics.map(m=>{ const cmp=this._comparison(history,m.key); const delta=cmp?this._formatDelta(cmp.delta,m.def):""; return `<button class="metric st-${m.status} ${m.key===selected.key?"selected":""}" data-key="${m.key}" type="button"><span class="metric-top"><ha-icon icon="${m.def.icon}"></ha-icon><span class="metric-name">${m.def.label}</span><i></i></span><span class="metric-reading"><strong>${this._escape(m.raw)}</strong><small>${this._unit(m.def)}</small></span><span class="metric-status">${this._statusText(m.status)}</span>${delta?`<span class="metric-delta ${cmp.delta>0?"up":cmp.delta<0?"down":"stable"}" title="${t(this._hass,"previous_analysis")}: ${cmp.previous}">${delta}</span>`:""}</button>`; }).join("");
    const integrationVersion=state.attributes.integration_version||"—";
    this.shadowRoot.innerHTML=`
      <style>
        :host{display:block;position:relative;isolation:isolate;contain:layout paint style;overflow:hidden;container-type:inline-size;--accent:${this._color("accent","#0397c5")};--good:${this._color("good","#43a047")};--warning:${this._color("warning","#f9a825")};--bad:${this._color("bad","#e53935")};--neutral:var(--secondary-text-color,#757575)}
        *{box-sizing:border-box}ha-card{position:relative;isolation:isolate;contain:layout paint;overflow:hidden;color:var(--primary-text-color);background:var(--ha-card-background,var(--card-background-color));border-radius:var(--ha-card-border-radius,18px)}
        .message{display:flex;align-items:center;gap:10px;padding:20px;color:var(--secondary-text-color)}
        .header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:22px 24px 14px}.identity{display:flex;align-items:center;gap:16px;min-width:0}.hero{width:58px;height:58px;border-radius:50%;display:grid;place-items:center;flex:none;color:var(--accent);background:color-mix(in srgb,var(--accent) 14%,transparent)}.hero ha-icon{--mdc-icon-size:34px}.title{min-width:0}.title h2{font-size:1.75rem;font-weight:600;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.title p{font-size:1.08rem;color:var(--secondary-text-color);margin:4px 0 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.badge{display:flex;align-items:center;gap:9px;padding:10px 15px;border-radius:999px;background:var(--secondary-background-color);font-size:1.05rem;font-weight:700;white-space:nowrap}.badge::before{content:"";width:11px;height:11px;border-radius:50%;background:var(--neutral)}.badge.st-good::before{background:var(--good)}.badge.st-warning::before{background:var(--warning)}.badge.st-bad::before{background:var(--bad)}.header-actions{display:flex;align-items:center;gap:10px}.refresh{appearance:none;border:0;border-radius:50%;width:50px;height:50px;display:grid;place-items:center;background:var(--secondary-background-color);color:var(--accent);cursor:pointer}.refresh:hover{background:color-mix(in srgb,var(--accent) 12%,var(--secondary-background-color))}.refresh:disabled{opacity:.55;cursor:wait}.refresh.loading ha-icon{animation:spin .9s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}
        .meta{display:flex;gap:10px;padding:0 24px 18px;overflow:hidden}.chip{display:flex;align-items:center;gap:9px;min-width:0;padding:10px 14px;border-radius:12px;background:var(--secondary-background-color);font-size:1rem}.chip ha-icon{color:var(--accent);--mdc-icon-size:24px}.chip span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.chip.age.st-warning,.chip.age.st-bad{color:var(--warning)}.chip.age.st-bad{color:var(--bad)}
        .section-label{padding:0 24px 12px;color:var(--secondary-text-color);font-size:1rem;font-weight:700;text-transform:uppercase;letter-spacing:.04em}.metrics{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;padding:0 24px 20px}.metrics:has(.metric:nth-child(6):last-child) .metric:nth-child(5){grid-column:2}.metric{appearance:none;border:1px solid transparent;background:var(--secondary-background-color);color:var(--primary-text-color);border-radius:20px;padding:16px;text-align:left;min-width:0;cursor:pointer;transition:transform .15s,border-color .15s,background .15s}.metric:hover{transform:translateY(-1px)}.metric.selected{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 8%,var(--secondary-background-color))}.metric-top{display:flex;align-items:center;gap:10px}.metric-top ha-icon{--mdc-icon-size:28px;color:var(--accent)}.metric-name{font-size:1.12rem;font-weight:700;overflow:hidden;text-overflow:ellipsis}.metric-top i{margin-left:auto;width:11px;height:11px;border-radius:50%;background:var(--neutral)}.metric.st-good i{background:var(--good)}.metric.st-warning i{background:var(--warning)}.metric.st-bad i{background:var(--bad)}.metric-reading{display:flex;align-items:baseline;gap:4px;margin-top:12px;white-space:nowrap}.metric-reading strong{font-size:2.15rem;font-weight:500}.metric-reading small{font-size:1rem;color:var(--secondary-text-color)}.metric-status{display:block;margin-top:7px;font-size:1rem;color:var(--secondary-text-color)}.metric.st-good .metric-status{color:var(--good)}.metric.st-warning .metric-status{color:var(--warning)}.metric.st-bad .metric-status{color:var(--bad)}.metric-delta{display:block;margin-top:7px;font-size:.96rem;color:var(--secondary-text-color);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.metric-delta.up{color:var(--warning)}.metric-delta.down{color:var(--accent)}
        .periods{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;margin:0 24px 16px;padding:6px;border-radius:18px;background:var(--secondary-background-color)}.period{appearance:none;border:0;border-radius:10px;min-height:48px;padding:10px 14px;background:transparent;color:var(--secondary-text-color);font-size:1.05rem;font-weight:600;cursor:pointer;white-space:nowrap;transition:background .15s,color .15s,box-shadow .15s}.period:hover{background:color-mix(in srgb,var(--accent) 8%,transparent)}.period.active{background:var(--card-background-color);color:var(--accent);font-weight:700;box-shadow:0 1px 3px rgba(0,0,0,.14)}.detail{position:relative;isolation:isolate;overflow:hidden;margin:0 24px 20px;padding:20px;border-radius:20px;background:var(--secondary-background-color)}.detail-head{display:flex;align-items:flex-end;justify-content:space-between;gap:10px}.detail-title{display:flex;align-items:center;gap:12px}.detail-title ha-icon{color:var(--accent)}.detail-title h3{font-size:1.45rem;margin:0;font-weight:600}.detail-value{display:flex;align-items:baseline;gap:5px}.detail-value strong{font-size:2.5rem;font-weight:500}.detail-value small{color:var(--secondary-text-color);font-size:1.2rem}.chart{position:relative;z-index:0;margin-top:18px;overflow:hidden;isolation:isolate;contain:paint}.chart-svg{width:100%;height:220px;display:block;color:var(--neutral);overflow:hidden}.chart-svg.s-good{color:var(--good)}.chart-svg.s-warning{color:var(--warning)}.chart-svg.s-bad{color:var(--bad)}.chart-svg .range .quality-zone{stroke-width:1;stroke-dasharray:5 4}.chart-svg .range .quality-zone.good{fill:color-mix(in srgb,var(--good) 16%,transparent);stroke:color-mix(in srgb,var(--good) 55%,transparent)}.chart-svg .range .quality-zone.warning{fill:color-mix(in srgb,var(--warning) 13%,transparent);stroke:color-mix(in srgb,var(--warning) 45%,transparent)}.chart-svg .range .quality-zone.bad{fill:color-mix(in srgb,var(--bad) 10%,transparent);stroke:color-mix(in srgb,var(--bad) 40%,transparent)}.chart-svg .grid line{stroke:var(--divider-color);stroke-width:1}.chart-svg .area polygon{fill:url(#jblFill)}.chart-svg .segment{stroke:var(--neutral);stroke-width:3;stroke-linecap:round}.chart-svg .segment.st-good{stroke:var(--good)}.chart-svg .segment.st-warning{stroke:var(--warning)}.chart-svg .segment.st-bad{stroke:var(--bad)}.chart-svg .line circle{fill:var(--neutral);stroke:var(--card-background-color);stroke-width:2}.chart-svg .line circle.st-good{fill:var(--good)}.chart-svg .line circle.st-warning{fill:var(--warning)}.chart-svg .line circle.st-bad{fill:var(--bad)}.chart-svg .line .hit{fill:transparent;stroke:none;pointer-events:all;cursor:crosshair}.chart-svg .line .last{stroke-width:3}.axis{display:grid;grid-template-columns:1fr auto 1fr;align-items:start;gap:10px;color:var(--secondary-text-color);font-size:1rem;line-height:1.4;margin-top:10px}.axis span:nth-child(2){text-align:center;font-weight:500}.axis span:last-child{text-align:right}.chart-tooltip{position:absolute;z-index:2;width:min(340px,calc(100% - 16px));max-width:calc(100% - 16px);transform:none;padding:18px 20px;border:1px solid color-mix(in srgb,var(--divider-color) 70%,transparent);border-radius:16px;background:color-mix(in srgb,var(--card-background-color) 96%,transparent);color:var(--primary-text-color);box-shadow:0 8px 28px rgba(0,0,0,.32);font-size:1.15rem;line-height:1.5;pointer-events:none;opacity:0;visibility:hidden;transition:opacity .12s;overflow-wrap:anywhere}.chart-tooltip.measuring{opacity:0!important;visibility:hidden!important;transition:none!important}.tt-date{font-size:1.05rem;font-weight:600;color:var(--secondary-text-color);margin-bottom:10px}.tt-label{font-size:.95rem;font-weight:600;color:var(--secondary-text-color);text-transform:uppercase;letter-spacing:.035em;margin-top:8px}.tt-value{font-size:2rem;font-weight:700;line-height:1.2;margin-top:2px}.tt-change{display:flex;align-items:baseline;gap:7px;flex-wrap:wrap;margin-top:3px;font-size:1.15rem}.tt-change strong{font-size:1.35rem}.tt-change span{color:var(--secondary-text-color);font-size:1.05rem}.tt-change.up strong{color:var(--warning)}.tt-change.down strong{color:var(--accent)}.tt-change.stable strong{color:var(--secondary-text-color)}.tt-stats{display:grid;gap:3px;margin-top:11px;padding-top:10px;border-top:1px solid var(--divider-color);font-size:1.05rem}.tt-range{display:flex;justify-content:space-between;gap:12px;margin-top:11px;padding-top:10px;border-top:1px solid var(--divider-color);font-size:1.05rem}.tt-range span{color:var(--secondary-text-color)}.tt-range strong{white-space:nowrap}.chart-tooltip.visible{opacity:1;visibility:visible}.chart-tooltip::after{display:none}.no-chart{height:160px;display:grid;place-items:center;color:var(--secondary-text-color);font-size:1rem}
         .footer{display:flex;justify-content:space-between;gap:12px;padding:12px 24px 16px;border-top:1px solid var(--divider-color);font-size:.82rem;color:var(--secondary-text-color)}.versions{white-space:nowrap}
        ha-card.compact .header{padding-bottom:8px}ha-card.compact .meta{display:none}ha-card.compact .section-label{display:none}ha-card.compact .metrics{padding-top:2px}.compact .detail{padding:10px}.compact .chart-svg{height:110px}.compact .footer span:first-child{display:none}
        @container (max-width:700px){.metrics{grid-template-columns:repeat(3,minmax(0,1fr))}.metrics:has(.metric:nth-child(6):last-child) .metric:nth-child(5){grid-column:auto}}
        @container (max-width:520px){.header{align-items:flex-start}.badge{font-size:0;padding:0;background:none}.badge::before{width:11px;height:11px}.meta{flex-wrap:wrap}.chip{flex:1 1 130px}.metrics{grid-template-columns:repeat(2,minmax(0,1fr))}.detail-head{align-items:center}.footer{flex-direction:column}.versions{white-space:normal}}
        @container (max-width:360px){.metrics{grid-template-columns:1fr}.title h2{font-size:1.35rem}.metric-reading strong{font-size:1.85rem}}
      </style>
      <ha-card class="${this.config.compact?"compact":""}">
        <div class="header"><div class="identity"><div class="hero"><ha-icon icon="${this._icon("header","mdi:water-check")}"></ha-icon></div><div class="title"><h2>${this._escape(title)}</h2><p>${t(this._hass,"last_analysis")}: ${this._escape(this._date(latest.date))}</p></div></div><div class="header-actions">${this.config.show_refresh===false?"":`<button id="refresh" class="refresh ${this._refreshing?"loading":""}" type="button" title="${t(this._hass,this._refreshing?"refreshing":"refresh")}" ${this._refreshing?"disabled":""}><ha-icon icon="${this._icon("refresh","mdi:refresh")}"></ha-icon></button>`}<div class="badge st-${overall}">${this._statusText(overall)}</div></div></div>
        <div class="meta"><div class="chip age st-${ageStatus}"><ha-icon icon="mdi:calendar-clock"></ha-icon><span>${this._ageText(ageDays)}</span></div><div class="chip"><ha-icon icon="mdi:chart-timeline-variant"></ha-icon><span>${history.length} ${countLabel}</span></div><div class="chip"><ha-icon icon="mdi:cloud-sync-outline"></ha-icon><span>${t(this._hass,"source")}: ${this._escape(latest.source||"ProScan")}</span></div></div>
        <div class="section-label">${t(this._hass,"latest_values")}</div><div class="metrics">${tiles}</div>
        <div class="periods">${["1m","3m","1y","all"].map(value=>`<button class="period ${this._period===value?"active":""}" data-period="${value}" type="button">${this._periodLabel(value)}</button>`).join("")}</div>
        <section class="detail"><div class="detail-head"><div class="detail-title"><ha-icon icon="${selected.def.icon}"></ha-icon><h3>${t(this._hass,"history")} — ${selected.def.label}</h3></div><div class="detail-value"><strong>${this._escape(selected.raw)}</strong><small>${this._unit(selected.def)}</small></div></div>${this._chart(history,selected.key,selected.status)}</section>
        <div class="footer"><span>${t(this._hass,"preserved")} ${t(this._hass,"local_rating")}</span><span class="versions">Card v${JBL_PROSCAN_CARD_VERSION} · Integration v${this._escape(integrationVersion)}</span></div>
      </ha-card>`;
    this._bind();
    this._maybeLoadStatistics(this._selected);
  }
}
if (!customElements.get("jbl-proscan-card")) customElements.define("jbl-proscan-card", JBLProScanCard);
window.customCards=window.customCards||[];
if(!window.customCards.some(card=>card.type==="jbl-proscan-card"))window.customCards.push({type:"jbl-proscan-card",name:"JBL ProScan",description:"Water quality and JBL ProScan history",preview:true});
console.info(`%c JBL ProScan Card %c v${JBL_PROSCAN_CARD_VERSION} `,"color:white;background:#0397c5;font-weight:600;padding:2px 5px;border-radius:4px 0 0 4px","color:#0397c5;background:#e2f5fa;padding:2px 5px;border-radius:0 4px 4px 0");
