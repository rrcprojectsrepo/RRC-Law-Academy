/**
 * Results & achievements data.
 * IMPORTANT: No student results are currently verified/available.
 * The `available` flag controls whether real result cards render.
 * Add verified entries as an array of { name, exam, year, achievement }.
 */

export const results = {
  available: false,
  message: 'Student results and achievements will be updated here.',
  entries: [],
  placeholders: [
    { title: 'Student Results', text: 'Verified student results will appear here once officially shared by the academy.' },
    { title: 'Programme-wise Results', text: 'Result highlights by programme (UG / PG) will be displayed when available.' },
    { title: 'Year-wise Results', text: 'Year-wise performance summaries will be updated as official data is released.' },
  ],
};