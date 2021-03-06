import { Putro, Zeboot } from 'CONTRIBUTORS';
import { change, date } from 'common/changelog';
import React from 'react';
import SpellLink from 'common/SpellLink';
import SPELLS from 'common/SPELLS';

export default [
  change(date(2020, 12, 16), <> Fix an issue with <SpellLink id={SPELLS.BORN_TO_BE_WILD_TALENT.id} /> where it wouldn't load or register casts. </>, Putro),
  change(date(2020, 12, 15), 'Bumped level of support to 9.0.2', Putro),
  change(date(2020, 12, 10), <> Fixed an issue where the module tracking utilisation of <SpellLink id={SPELLS.PRECISE_SHOTS.id} /> was accidentally showing unused procs as the used amount of procs. </>, Putro),
  change(date(2020, 12, 4), <> Implement the 100% focus generation increase to focus generators from <SpellLink id={SPELLS.NESINGWARYS_TRAPPING_APPARATUS_EFFECT.id} />. </>, Putro),
  change(date(2020, 11, 14), <> Implement the 50% focus generation increase from <SpellLink id={SPELLS.TRUESHOT.id} /> and lay initial groundwork for <SpellLink id={SPELLS.NESINGWARYS_TRAPPING_APPARATUS_EFFECT.id} /> legendary.</>, Putro),
  change(date(2020, 11, 7), <> Added support for the four Marksmanship specific legendaries <SpellLink id={SPELLS.SERPENTSTALKERS_TRICKERY_EFFECT.id} />, <SpellLink id={SPELLS.SURGING_SHOTS_EFFECT.id} />, <SpellLink id={SPELLS.SECRETS_OF_THE_UNBLINKING_VIGIL_EFFECT.id} />, and <SpellLink id={SPELLS.EAGLETALONS_TRUE_FOCUS_EFFECT.id} />.</>, Putro),
  change(date(2020, 10, 18), 'Moved catchall event listeners to new filter', Zeboot),
  change(date(2020, 10, 13), 'Updated all Marksmanship modules for Shadowlands prepatch as well as adding a checklist', Putro),
];
