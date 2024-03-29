/**
 * Copyright (c) Bohdan Shtepan.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import { BRAND_LOGO, FOOTER_COPY_LINK, FOOTER_COPY_NAME, FOOTER_COPY_YEAR, NAV_LINKS } from '../../core/consts';
import { l } from '../../core/localization';
import packageJson from '../../../package.json';

export default function Footer() {
    return (
        <div className='container-lg'>
            <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top row mb-0'>
                <p className='col-md-4 mb-0 text-muted'>&copy; {FOOTER_COPY_YEAR} <a href={FOOTER_COPY_LINK} className='link-secondary'>{FOOTER_COPY_NAME}</a></p>

                <a href='/' className='col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none'>
                    <img src={BRAND_LOGO as unknown as string} className='bi me-2' width='42' height='42' alt={l('Logo')} />
                </a>

                <ul className='nav col-md-4 justify-content-end'>
                    {
                        NAV_LINKS.map(({ enabled, path, locKey }, index) => enabled && <li className='nav-item' key={index}>
                            <NavLink to={path} className='nav-link px-2 text-muted'>{l(locKey)}</NavLink>
                        </li>)
                    }
                </ul>

                <span className='col-12 text-center text-muted small fw-light'>
                    { l('build v') + packageJson.version }
                </span>
            </footer>
        </div>
    );
}
